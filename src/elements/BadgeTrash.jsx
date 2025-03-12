import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/cartSlice/CartSlice";

const BadgeTrash = ({product}) => {
    const store = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    return (
        <>
            <IconButton sx={{padding:'0'}} size="medium" aria-label="delete" onClick={()=>dispatch(deleteProduct(product))}>
                <DeleteIcon sx={{fontSize:'large'}}/>
            </IconButton>
        </>
    )
}

export default BadgeTrash