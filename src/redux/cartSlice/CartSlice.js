import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    initialState: {
        value: 0,
        cart: [],
        total: 0,
    },
    name: 'cart',
    reducers: {
        increment : (state, {payload}) => {
            if (state.cart.find((product)=> product.id === payload.id)) {
                state.cart.map((product)=> product.id === payload.id ? product.qty++ : product)
                state.total = state.cart.reduce((total, product) => product.id === payload.id ? total + product.qty * product.price : product ,0)
            }
            state.value = state.cart.reduce((total, product)=> total + product.qty,0)
        },
        decrement : (state, {payload}) => {
            if (state.cart.find((product)=> product.id === payload.id)) {
                state.cart.map((product)=> {
                    if (product.id === payload.id) {
                        if (product.qty > 1) {
                            product.qty-- 
                        }
                        product
                    }
                })
            }
            state.value = state.cart.reduce((total, product)=> total + product.qty,0)
        },
        addProduct : (state,{payload}) => {
            if (state.cart.find((product)=>product.id === payload.id)) {
                state.cart.map((product)=> product.id === payload.id ? product.qty++ : product)
                state.total = state.cart.reduce((total, product) => product.id === payload.id ? total + product.qty * product.price : product,0)
                
            } else {
                state.cart.push({...payload, qty:1})
            }
            state.value = state.cart.reduce((total, product)=> total + product.qty,0)
        },
        deleteProduct : (state, {payload}) => {
            if (state.cart.find((product)=> product.id === payload.id)) {
                state.cart = state.cart.filter((product) =>  product.id !== payload.id)
            }
        }
    }
})

export const { increment, decrement, addProduct, deleteProduct } = CartSlice.actions
export default CartSlice.reducer