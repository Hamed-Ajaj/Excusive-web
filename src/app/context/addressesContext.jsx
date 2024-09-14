"use client"
import { useToast } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';

const CartContext = createContext();

export const AddressesProvider = ({children}) => {
    const [addresses,setAddresses] = useState([]);
    const [loading,setLoading] = useState(true);
    const toast = useToast()


    const addAddress = async (data) => {

        try {
            setLoading(true)
            await setDoc(doc(db,"users",auth?.currentUser?.uid,"addresses",data.id),{
                id:data.id,
                firstName:data.data.fname,
                lastName:data.data.lname,
                address:data.data.address,
                phoneNumber:data.data.phoneNumber,
            })
            toast({
                title:"Address added",
                description:"Address added successfully",
                status:"success",
                duration:3000,
                isClosable:true
            })
            setAddresses([...addresses,{
                id:data.id,
                firstName:data.data.fname,
                lastName:data.data.lname,
                address:data.data.address,
                phoneNumber:data.data.phoneNumber,
            }])
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const deleteAddress = async (id) => {
        try {
            setLoading(true)
            await deleteDoc(doc(db,"users",auth?.currentUser?.uid,"addresses",id))
            setAddresses(addresses.filter(address => address.id !== id))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const editAddress = async (id,{firstName,lastName,address,phoneNumber}) => {
        try {
            setLoading(true)
            await updateDoc(doc(db,"users",auth?.currentUser?.uid,"addresses",id),{
                firstName,
                lastName,
                address,
                phoneNumber,
            })
            setAddresses(addresses.map(address => address.id === id ? {
                ...address,
                firstName,
                lastName,
                address,
                phoneNumber,
            } : address))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    const initializeAddresses = async (user) => {
        if(user){
            try {
                setLoading(true)
                const addressesDoc = await getDocs(collection(db, "users", auth?.currentUser?.uid,"addresses"));
                
                setAddresses(addressesDoc.docs.map(doc => doc.data()))
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        else{
            setAddresses([])
            setLoading(false)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,initializeAddresses)
        return unsubscribe
    },[])

    const values = {
        addresses,
        loading,
        addAddress,
        deleteAddress,
        editAddress
    }

    return (
        <CartContext.Provider value={values}>
            {!loading && children}
        </CartContext.Provider>
    )
}

export const useAddresses = () => {
    return useContext(CartContext)
}