import { Button } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';



const ButtonSort = ({exSmall, small, ft, pad}) => {
    return (
        <div>
            <Button variant="outlined" sx={{display: {xs:exSmall, sm:small}, fontSize:ft, padding:pad }}>
                Sort by<FilterAltIcon/>
            </Button>
        </div>
    )
}

export default ButtonSort