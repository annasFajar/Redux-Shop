import { useEffect, useState } from "react"
import ProductLayout from "../layouts/ProductLayout"
import ProductsApi from "../API/product.api"
import CardProduct from '../fragments/CardProduct'
import { Grid2 } from "@mui/material"
import { gridClasses } from "@mui/material/Grid"
import ModalCart from '../fragments/ModalCart'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/cartSlice/CartSlice"



const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    
    useEffect(()=>{
        ProductsApi((res)=>setProducts(res))
    },[])
    

    return(
        <ProductLayout>
            <div className=" m-4 mx-4 sm:mx-12 md:mx-13 lg:mx-19" >
                {/* <ModalCart/> */}
                <div className="  grid scale-90 origin-top gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {products.map((product)=> {
                        return (
                                <div className="flex" key={product.id}>
                                    <CardProduct addProduct={()=>{dispatch(addProduct(product))}} category={product.category} price={product.price} id={product.id} rate={product.rating.rate} review={product.rating.count} image={product.image} title={`${product.title.length < 30 ? product.title : product.title?.substring(0,30) + '...'} `} />
                                </div>
                                )
                            })}
                </div>
            </div>
        </ProductLayout>
    )
}

export default Products