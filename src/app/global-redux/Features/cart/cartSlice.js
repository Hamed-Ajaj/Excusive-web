"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [

    ],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push({...action.payload,quantity:1})
            let previousItem = state.items.find(item => item.id === action.payload.id)
            if(previousItem){
                previousItem.quantity += 1
            }else{
                state.items.push({...action.payload,quantity:1})
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        increaseItem : (state, action) => {
            let item = state.items.find(item => item.id === action.payload)
            item.quantity += 1
        },
        decreaseItem : (state, action) => {
            let item = state.items.find(item => item.id === action.payload)
            if(item.quantity > 1){
                item.quantity -= 1
            }else{
                state.items = state.items.filter(item => item.id !== action.payload)
            }
        }
        
    }
})

export const { addItem, removeItem,increaseItem,decreaseItem } = cartSlice.actions
export default cartSlice.reducer