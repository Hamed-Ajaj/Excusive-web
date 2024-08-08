import { createSlice } from "@reduxjs/toolkit"
import { auth } from "@/app/firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
const initialState = {
    user: null,
}

export const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp : async (state, action) => {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
                const user = userCredential.user
                state.user = user
            } catch (error) {
                console.log(error)
            }
        },
    }
})

export const { signUp } = authSlice.actions
export default authSlice.reducer