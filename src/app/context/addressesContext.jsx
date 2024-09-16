"use client"
import { useToast } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import Loader from '@/components/Loader';

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

    const getAddressById = (id) => {
        return addresses.find(address => address.id === id)
    }

    const deleteAddress = async (id) => {
        try {
            setLoading(true)
            await deleteDoc(doc(db,"users",auth?.currentUser?.uid,"addresses",id))
            toast({
                title:"Address deleted",
                description:"Address deleted successfully",
                status:"success",
                duration:3000,
                isClosable:true
            })
            setAddresses(addresses.filter(address => address.id !== id))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const editAddress = async (id,data) => {
        console.log(id,data)
        try {
            setLoading(true)
            await updateDoc(doc(db,"users",auth?.currentUser?.uid,"addresses",id),{
                firstName:data.fname,
                lastName:data.lname,
                address:data.address,
                phoneNumber:data.phoneNumber,
            })
            toast({
                title:"Address updated",
                description:"Address updated successfully",
                status:"success",
                duration:3000,
                isClosable:true
            })
            setAddresses(addresses.map(address => address.id === id ? {
                ...address,
                firstName:data.fname,
                lastName:data.lname,
                address:data.address,
                phoneNumber:data.phoneNumber,
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
        getAddressById,
        editAddress
    }

    return (
        <CartContext.Provider value={values}>
            {loading ?<Loader /> : children}
        </CartContext.Provider>
    )
}

export const useAddresses = () => {
    return useContext(CartContext)
}