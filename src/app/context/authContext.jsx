"use client"

import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true);

    const values = {
        currentUser,
        userLoggedIn,
        loading
    }
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

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser)
        return unsubscribe
    },[])

    

    return (
        <AuthContext.Provider value={values}>
            {!loading ? children:"...loading"}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    return useContext(AuthContext)
}
