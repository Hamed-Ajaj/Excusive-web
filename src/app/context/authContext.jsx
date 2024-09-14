"use client"

import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { logOut } from '../firebase/auth';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true);
    const toast = useToast()
    const router = useRouter()
    
    async function initializeUser(user) {
        if(user) {
            setCurrentUser({...user})
            setUserLoggedIn(true)
        }
        else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }
    const handleLogout = () => {
        logOut();
        toast({
            title: "Logged Out",
            description: "You've been logged out.",
            status: "success",
            duration: 9000,
            isClosable: true,
        })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser)
        return unsubscribe
    },[])

    const values = {
        currentUser,
        userLoggedIn,
        loading,
        handleLogout,
    }
    

    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    return useContext(AuthContext)
}
