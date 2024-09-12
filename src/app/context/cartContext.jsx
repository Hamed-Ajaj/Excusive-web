"use client"
import { createContext, useContext, useEffect, useState } from 'react';

import { auth, db } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [loading,setLoading] = useState(true);

    

    const addToCart =async ({id,title,price,discountPercentage,rating,stock,tags,brand,availabilityStatus,thumbnail,images,reviews}) => {
        try {
            setLoading(true)
            await addDoc(collection(db,"users",auth?.currentUser?.uid,"cart"),{
                id,
                title,
                price,
                discountPercentage,
                rating,
                stock,
                tags,
                brand,
                availabilityStatus,
                thumbnail,
                images,
                reviews
            })
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    async function initializeCart(user) {
        if(user) {
            // Fetch cart from firestore
            const userRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userRef);
            // ! tomorrow we have to know how to get the cart from the userDoc ان شاء الله
            console.log(userDoc)
            // if(userDoc.exists()){
            //     const userCart = await getDoc(collection(db,"users",auth?.currentUser?.uid,"cart"));
            //     console.log(userCart.data())
            //     setCart(userCart)
            // }
        }
        setLoading(false)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,initializeCart)
        return unsubscribe
    },[])

    const values = {
        cart,
        loading,
        addToCart
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