"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        {
            id:1,
            title:"Breed Dry Dog Food",
            price:100,
            quantity:1,
            productImg:"/products/breedDog.svg"
        },
        {
            id:2,
            title:"Breed Dry Dog Food",
            price:100,
            quantity:2,
            productImg:"/products/breedDog.svg"
        }
    ],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer