import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
        props: ({ expand }) => !!expand,
        style: {
            transform: 'rotate(180deg)',
        },
    },
],
}));

const colorBg = (kategori) => {
    const getColor = {
        "men's clothing": 'lightcyan',
        jewelery: 'lavender',
        electronics: 'lightgreen',
        "women's clothing": 'lemonchiffon'
    }
    return getColor[kategori]
}


const colorCategory = (kategori) => {
    const changeColor =  {
        "men's clothing" : 'info',
        jewelery : 'secondary',
        electronics: 'success',
        "women's clothing" : 'warning'
    }
    return changeColor[kategori] || 'error'
} 

export default function RecipeReviewCard({price,image, title, category, rate, review, id}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    
  };

  return (
    <Card sx={{ width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <CardMedia
          component="img"
          
          image={image}
          sx={{ height:'200px', objectFit:'contain'}}
          alt="Paella dish"
        />
      <CardHeader
        title={category}
        sx={{marginTop:'5px',padding:'0', backgroundColor: colorBg(category)}}
        slotProps={{
            title: {fontSize:'1rem', textAlign:'center', fontWeight: 500,color: colorCategory(category)}
            
        }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ fontWeight:'bold' }}>
          {title}
        </Typography>
        <Typography component='span' sx={{marginTop:'6px', fontSize:'10px'}}>
            <span className='flex gap-1 items-center'>
              <span className='inline-flex'>
                {Array.from({length: 5}).map((empty,index) => {
                  return index < Math.round(rate) ? <StarIcon key={index} sx={{fontSize:'15px', color: 'gold'}}/> : <StarBorderIcon key={index} sx={{fontSize:'15px'}}/>
                })}
              </span>
              <span>|</span>
              <span className='text-gray-500'>
                {review} review
              </span>
            </span>
          <Typography/>
        </Typography>
        
      </CardContent>
      <CardContent sx={{padding:'0', marginX:'10px', justifyContent:'space-between',display:'flex', alignItems:'center'}}>
          <div className=' p-1.5 bg-teal-100  flex-1 rounded-sm'>
            <Typography sx={{fontWeight:'600'}}>
              {price.toLocaleString("en-US", {style:"currency", currency:"USD"})}
            </Typography>
          </div>
          <div className=' bg-teal-700 rounded-sm'>
            <IconButton sx={{padding:'6px'}}>
              <AddShoppingCartIcon sx={{color:'white'}}/>
            </IconButton>
          </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
