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
                const {name,email,password} = action.payload.data
                const user = await createUserWithEmailAndPassword(auth,email,password)
                state.user = user
                router.push('/')
              } catch (error) {
                console.log(error)
              }

        },
    }
})

export const { signUp } = authSlice.actions
export default authSlice.reducer