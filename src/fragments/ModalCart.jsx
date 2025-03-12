import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import BadgeShop from '../elements/BadgeShop'
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import ButtonCustom from '../elements/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import BadgeTrash from '../elements/BadgeTrash';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  borderRadius:'15px'
};

export default function TransitionsModal() {
  const store = useSelector((state)=>state.cart)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log(open)
    return setOpen(false)
  };
  const [total,setTotal] = useState(0)

  useEffect(()=> {
    const hasil = store.cart?.reduce((hasil, product) => hasil + product.qty * product.price,0)
    setTotal(hasil.toLocaleString("en-US", {style:"currency", currency:"USD"}))
  }, [store])
  
  return (
    <>
    
      <IconButton onClick={handleOpen}>
        <BadgeShop />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h5">
              Cart
            </Typography>
            <Typography id="transition-modal-description" component='span'  sx={{ mt: 2 }}>
              <div className=' flex gap-1 flex-col '>
                <div className=' flex   flex-col min-h-70'>

                  {store.cart.map((product)=> {
                    return  <div key={product.id} className=' p-1 flex items-stretch '
                      >
                        <div  className=' flex justify-center items-center min-w-20 min-h-20'>
                          <img src={product.image} alt="" className=' object-contain w-16 h-16 flex'/>
                        </div>
                        <div className=' flex-4 p-2 flex flex-col justify-between '>
                          <div >
                            <p className='font-semibold text-xs'>
                              {product.title}
                            </p>
                          </div>
                          <div className=' flex w-max'>
                            <p className='text-xs p-0.5 bg-amber-200 rounded-md'>
                              {product.category}
                            </p>
                          </div>
                          <div className='mt-auto'>
                            <p className='text-xs font-black '>
                              ${product.price}
                            </p>
                          </div>
                        </div>
                        <div className=' flex flex-col justify-between flex-1 p-2'>
                          <div className=' flex justify-end'>
                            <BadgeTrash product={product}/>
                          </div>
                          <div className='flex '>
                              <ButtonCustom LogoMinus={RemoveIcon} LogoPlus={AddIcon} text={product.qty} product={product}/>
                          </div>
                        </div>
                      </div>
                    
                  })}
                </div>
                
                  <div className=' flex justify-between'>
                    <div>
                      <p >Total</p>
                    </div>
                    <div>
                      <p className='font-bold'>{total}</p>
                    </div>
                  </div>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
