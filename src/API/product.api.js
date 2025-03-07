import axios from "axios";

const ProductsApi = (callback) => axios({
    method: 'get',
    url: import.meta.env.VITE_API_URL,

}).then((res)=> callback(res.data))

export default ProductsApi