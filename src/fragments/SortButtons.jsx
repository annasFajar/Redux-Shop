import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react"



const SortButtons = () => {
    const [click, setClick] = useState('')
    
    const handleClick = (event) => {
        
        return setClick(event.target.id)
    }

    
    const sortProducts = ['all',"men's clothing", 'jewelery', 'electronics', "women's clothing"]

    useEffect(()=>{
        console.log(click)
    }, [click])
    return (
        <Box  sx={{ '& button': { m: 0.5 } }}>
            <div>
                <Button size="medium"  id="all" sx={{backgroundColor: click === "all" ? 'paleturquoise' : 'transparent', color: click === "all" ? 'navy' : '#1976D2' }} onClick={()=> handleClick(event)} variant="outlined">all</Button>
                <Button size="medium"  id="men's clothing" sx={{backgroundColor: click === "men's clothing" ? 'paleturquoise' : 'transparent', color: click === "men's clothing" ? 'navy' : '#1976D2' }} onClick={()=> handleClick(event)} variant="outlined">men's clothing</Button>
                <Button size="medium" id="jewelery" sx={{backgroundColor: click === "jewelery" ? 'paleturquoise' : 'transparent', color: click === "jewelery" ? 'navy' : '#1976D2'}} onClick={()=> handleClick(event)} variant="outlined">jewelery</Button>
                <Button size="medium" id="electronics" sx={{backgroundColor: click === "electronics" ? 'paleturquoise' : 'transparent', color: click === "electronics" ? 'navy' : '#1976D2'}} onClick={()=> handleClick(event)} variant="outlined">electronics</Button>
                <Button size="medium" id="women's clothing" sx={{backgroundColor: click === "women's clothing" ? 'paleturquoise' : 'transparent', color: click === "women's clothing" ? 'navy' : '#1976D2'}} onClick={()=> handleClick(event)} variant="outlined">women's clothing</Button>
            </div>
        </Box>
    )
}

export default SortButtons