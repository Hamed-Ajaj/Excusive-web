import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    updatePassword,
} from "firebase/auth";
import { auth, provider } from "./firebase";

export const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
    return signInWithEmailAndPassword(auth,email, password);
};

export const signInWithGoogle = async () => {
     const result = signInWithPopup(auth, provider);
    // i need to learn how to save the user to firestore also
    return result;
};

export const logOut = async () => {
    return auth.signOut();
};

export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const changePassword = (newPass) => {
    return updatePassword(auth.currentUser, newPass);
};

export const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser, {
        url : `${window.location.origin}/home`
    })
}