import { useEffect, useState } from "react"
import ProductLayout from "../layouts/ProductLayout"
import ProductsApi from "../API/product.api"
import CardProduct from '../fragments/CardProduct'
import { Grid2 } from "@mui/material"
import { gridClasses } from "@mui/material/Grid"

const Products = () => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        ProductsApi((res)=>setProducts(res))
    },[])
    

    return(
        <ProductLayout>
            <div className="mx-4 my-10 sm:mx-12 sm:my-15 md:mx-13 md:my-5 lg:mx-19 lg:my-10" >
                <div className=" grid scale-90 gap-2 border grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {products.map((product)=> {
                        return (
                                <div className="flex">
                                    <CardProduct category={product.category} price={product.price} id={product.id} rate={product.rating.rate} review={product.rating.count} image={product.image} title={`${product.title.length < 30 ? product.title : product.title?.substring(0,30) + '...'} `} />
                                </div>
                                )
                            })}
                </div>
            </div>
        </ProductLayout>
    )
}

export default Products