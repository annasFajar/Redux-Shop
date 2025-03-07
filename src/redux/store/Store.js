import { configureStore } from "@reduxjs/toolkit";
import CartSlice from '../cartSlice/CartSlice'

const store = configureStore({
    reducer: {
        cart: CartSlice
    }
})

store.subscribe(()=> {
    console.log(store.getState())
})

export default store