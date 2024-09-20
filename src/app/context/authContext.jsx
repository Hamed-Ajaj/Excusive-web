"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { logOut } from "../firebase/auth";
import { useToast } from "@chakra-ui/react";
import Loader from "@/components/Loader";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const toast = useToast();


  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logOut();
      toast({
        title: "Logged Out",
        description: "You've been logged out.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "An error occurred while logging out.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const values = {
    currentUser,
    userLoggedIn,
    loading,
    handleLogout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, [auth.currentUser]);

  return (
    <AuthContext.Provider value={values}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
