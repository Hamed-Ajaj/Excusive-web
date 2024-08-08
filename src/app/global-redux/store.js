"use client"
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./Features/cart/cartSlice"
import authSliceReducer from "./Features/auth/authSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authSliceReducer
    },
})
