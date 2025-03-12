import { Button, ButtonGroup } from "@mui/material"
import { useDispatch } from "react-redux"
import { decrement, increment } from "../redux/cartSlice/CartSlice"
import { useSelector } from "react-redux"


const ButtonCustom = ({LogoMinus, LogoPlus, text, product}) => {
    const dispatch = useDispatch()

    return (
        <ButtonGroup sx={{
            display: "flex",
            gap: 0, 
            "& .MuiButton-root": { minWidth: "auto", padding: "2px", height: "24px" } // Override button di dalamnya
            }} size="small"  aria-label="Small button group">
                <Button sx={{padding: '0', minWidth:'auto'}} variant="outlined" onClick={()=>dispatch(decrement(product))}>
                    {LogoMinus && <LogoMinus sx={{fontSize:"small"}}/>}
                </Button>
                <Button sx={{
                    paddingX: '5px !important' ,
                    pointerEvents: "none", 
                    color: "inherit",
                    backgroundColor: "transparent",
                }} variant="outlined">
                    {text}
                </Button>
                <Button sx={{padding: '0', minWidth:'auto'}} variant="outlined" onClick={()=>dispatch(increment(product))}>
                    {LogoPlus && <LogoPlus sx={{fontSize:"small"}}/>}
                </Button>
        </ButtonGroup>
    )
}

export default ButtonCustom