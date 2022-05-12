import Index from '../../views/Index';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BgIm from "../../assets/unixes.jpg";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React ,{ useEffect} from 'react';
import {getBrands} from '../../actions/brands';
import {getProducts} from '../../actions/products';
import CardBrand from './CardBrand';
import CardProducts from './CardProducts';
import { useDispatch, useSelector } from "react-redux";
function Home(props) {
    const { data } = useSelector(state => state.brands);
    const { dataProducts } = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBrands());
        dispatch(getProducts());
    },[])

    return (
            <Index>
                <Card sx={{m:5}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="400"
                        image={BgIm}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h1" component="div" align="center" sx={{color: '#9c27b0'}}>
                        Team 3
                        </Typography>
                        <Typography variant="h5" color="text.secondary" align="center">
                        Chào mừng bạn đến với Fashion-shop của chúng tôi rất hân hạnh được mang phong cách unixes thịnh hành trên thế giới
                        đến với các bạn với hàng ngàn sản phẩn mang phong cách hiện đại đại diện cho cách mạng thay đổi nền thời trang thế giới.
                        </Typography>
                    </CardContent>
                </Card>
                <Container>
                <Typography gutterBottom variant="h1" component="div" align="center" sx={{color: '#9c27b0'}}>
                        4 Brand  Unisex Cực Chất
                        </Typography>
                        <Typography variant="h5" color="text.secondary" align="center">
                        Đây là những brand nổi tiếng hợp tác với chúng tôi !
                        </Typography>
                    <Grid container spacing={1}>
                        {data.map((brand) => (
                            <Grid item xs={12} md={6} key={brand.id}>
                                <CardBrand brand={brand}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container>
                <Typography gutterBottom variant="h1" component="div" align="center" sx={{color: '#9c27b0'}}>
                        Chào Đón Mùa Hè
                        </Typography>
                        <Typography variant="h5" color="text.secondary" align="center">
                        Những sản phẩm tiêu điểm cho mùa hè này !
                        </Typography>
                    <Grid container spacing={1}>
                        {dataProducts.map((product) => (
                            product.attributes.hot && 
                                (<Grid item xs={6} md={3} key={product.id}>
                                    <CardProducts product={product}/>
                                </Grid>)
                        ))}
                    </Grid>
                </Container>
            </Index>
    );
}

export default Home;