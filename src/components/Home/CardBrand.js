import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <Card sx={{m:2}}>
                    <CardMedia
                        component="img"
                        alt="Anh"
                        image={props.brand.attributes.imgurl}
                        height="190"
                        wight="190"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="center" sx={{color: '#9c27b0'}}>
                        {props.brand.attributes.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align="left">
                        Address:{props.brand.attributes.address}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-around" }}>
                  <Button size="small"><Link to={`/Brands/${props.brand.id}`}>Xem vui vui</Link></Button>
                  <Button size="small"><a href="https://list.vn/top-5-brand-thiet-ke-unisex-cuc-chat/" target="_blank">Xem chi tiết</a></Button>
                </CardActions>
                </Card>
        </>
    );
}

export default CardItem;