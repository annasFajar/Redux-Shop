import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const CartSlice = createSlice({
    initialState: {
        value: 0,
        cart: [],
    },
    name: 'cart',
    reducers: {
        increment : (state, payload) => {
            state.value += 1
        },
        decrement : (state, payload) => {
            state.value -= 1
        },
        addProduct : (state,{payload}) => {
            if (state.cart.find((product)=>product.id === payload.id)) {
                state.cart.map((product)=> product.id === payload.id ? product.qty++ : product)

            } else {
                state.cart.push({...payload, qty:1})
            }
        }
    }
})

export const { increment, decrement, addProduct } = CartSlice.actions
export default CartSlice.reducer