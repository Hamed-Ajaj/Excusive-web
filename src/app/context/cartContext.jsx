"use client"
import { createContext, useContext, useEffect, useState } from 'react';

import { auth, db } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc, } from 'firebase/firestore';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [loading,setLoading] = useState(true);
    const toast = useToast()
    const router = useRouter()

    const addToCart =async ({id,title,thumbnail,images,priceAfterDisc}) => {
        try {
            setLoading(true)
            if(!auth.currentUser) {
                toast({
                    title:"Please login to add to cart",
                    description:"You need to login to add items to cart",
                    status:"error",
                    duration:3000,
                    isClosable:true
                })
                router.push("/sign-in")
            }
            if(cart.some(item => item.id === id)){
                const item = cart.find(item => item.id === id)
                await updateDoc(doc(db,"users",auth?.currentUser?.uid,"cart",String(id)),{
                    // id,
                    // title,
                    // priceAfterDisc,
                    // thumbnail,
                    // images,
                    quantity:item.quantity + 1,
                })
                setCart(cart.map(item => item.id === id ? {...item,quantity:item.quantity + 1} : item))
            }else{
                await setDoc(doc(db,"users",auth?.currentUser?.uid,"cart",String(id)),{
                    id,
                    title,
                    priceAfterDisc,
                    thumbnail,
                    images,
                    quantity:1,
                })
                setCart([...cart,{
                    id,
                    title,
                    priceAfterDisc,
                    thumbnail,
                    images,
                    quantity:1
                }])
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const getCart = async () => {
        try {
            setLoading(true)
            const userDoc = await getDocs(collection(db, "users", auth?.currentUser?.uid,"cart"));
            setCart(userDoc.docs.map(doc => doc.data()))
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const handleRemoveItem = async (id) => {
        try {
            setLoading(true)
            await deleteDoc(doc(db,"users",auth?.currentUser?.uid,"cart",String(id)))
            setCart(cart.filter(item => item.id !== id)) 
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const increaseQuantity = async (id) => {
        const item = cart.find(item => item.id === id)
        await updateDoc(doc(db,"users",auth?.currentUser?.uid,"cart",String(id)),{
            quantity:item.quantity + 1,
        })
        setCart(cart.map(item => item.id === id ? {...item,quantity:item.quantity + 1} : item))
    }

    const decreaseQuantity = async (id) => {
        const item = cart.find(item => item.id === id)
        await updateDoc(doc(db,"users",auth?.currentUser?.uid,"cart",String(id)),{
            quantity:item.quantity - 1,
        })
        if(item.quantity === 1){
            return handleRemoveItem(id)
        }
        setCart(cart.map(item => item.id === id ? {...item,quantity:item.quantity - 1} : item))
    }

    async function initializeCart(user) {
        if(user) {
            // Fetch cart from firestore

            
            const userDoc = await getDocs(collection(db, "users", auth?.currentUser?.uid,"cart"));
            
            setCart(userDoc.docs.map(doc => doc.data()))
            // if(userDoc.exists()){
            //     const userCart = await getDoc(collection(db,"users",auth?.currentUser?.uid,"cart"));
            //     console.log(userCart.data())
            //     setCart(userCart)
            // }
        }
        else{
            setCart([])
        }
        setLoading(false)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,initializeCart)
        return unsubscribe
    },[auth.currentUser])

    const values = {
        cart,
        loading,
        addToCart,
        getCart,
        handleRemoveItem,
        increaseQuantity,
        decreaseQuantity
    }

    return (
        <CartContext.Provider value={values}>
            {!loading && children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}