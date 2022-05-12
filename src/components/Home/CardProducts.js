import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function CardProducts(props) {
    return (
        <>
            <Card sx={{m:2}}>
                    <CardMedia
                        component="img"
                        alt="Anh"
                        image={props.product.attributes.imgurl}
                        height="190"
                        wight="190"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="center" sx={{color: '#9c27b0'}}>
                        {props.product.attributes.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align="left">
                        Price:{props.product.attributes.price}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-around" }}>
                  <Button size="small"><Link to={`/Product/${props.product.id}`}>Xem vui vui</Link></Button>
                </CardActions>
                </Card>
        </>
    );
}

export default CardProducts;