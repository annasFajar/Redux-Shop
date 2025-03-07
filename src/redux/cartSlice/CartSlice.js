import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    initialState: {
        value: 0,
    },
    name: 'cart',
    reducers: {
        increment : (state, payload) => {
            state.value += 1
        },
        decrement : (state, payload) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = CartSlice.actions
export default CartSlice.reducer