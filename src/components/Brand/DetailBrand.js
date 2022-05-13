import React, { useEffect, useState,memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
const initState = {
    name:'',
    description:'',
    imgurl:'',
    address:'',
    price:'',
} 
function DetailBrand(props) {
    const [brand,setBrand] = useState(initState);
    useEffect(()=>{
        setBrand(props.brand)
    })
    return (
        <>
            <Card sx={{m:5}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="400"
                    image={brand.imgurl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h1" component="div" align="center" sx={{color: '#9c27b0'}}>
                    {brand.name}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" align="left">
                    {brand.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" align="left">
                    Địa Chỉ : {brand.address}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" align="left">
                    Giá Trung Bình : {brand.price}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default memo(DetailBrand);