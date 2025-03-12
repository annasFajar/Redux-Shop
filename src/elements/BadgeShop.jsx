import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';


export default function BadgeVisibility() {
  // const [count, setCount] = React.useState(1);
  const cart = useSelector((state)=>state.cart.cart)
  const count = useSelector((state)=> state.cart.value)
  const [totalQty, setTotalQty] = useState(count)
  
  // const totalQuantity = count.re
  useEffect(()=> {
  const hasil =  cart.reduce((totalQty, product)=> totalQty + product.qty,0)
  setTotalQty(hasil)
}, [cart])

  return (
    <>
        <Badge color="error" badgeContent={totalQty}>
          <ShoppingCartIcon/>
        </Badge>
        {/* <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup> */}
    </>
  )
}
