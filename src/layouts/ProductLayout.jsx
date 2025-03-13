import { useDispatch, useSelector } from 'react-redux'
import Nav from '../fragments/Nav'
import {  increment, decrement } from '../redux/cartSlice/CartSlice'
import ProductsApi from '../API/product.api'
import { useEffect } from 'react'
import ModalCart from '../fragments/ModalCart'
import SortButtons from '../fragments/SortButtons'

const ProductLayout = ({children}) => {
    const count = useSelector((state)=> state.cart.value)
    const dispatch = useDispatch()
    

    return (
        <div className="flex-col justify-center items-center min-h-auto">
            <Nav>
                <ModalCart/>
            </Nav>
            <SortButtons/>
            {children}
        </div>
    )
}

export default ProductLayout