import React ,{ useEffect,useState} from 'react';
import Index from '../../views/Index';
import MenuBar from './MenuBar';
import {Grid,Box} from '@mui/material';
import { useDispatch,useSelector } from "react-redux";
import {getBrands} from '../../actions/brands';
import DetailBrand from './DetailBrand'
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import CardProducts from '../Home/CardProducts';
import { getProducts } from '../../actions/products';
const initStateBrand = {
    id:'',
    attributes:{
    name:'',
    descripstion:'',
    imgurl:'',
    address:'',
    price:''
    }
}
function Brand(props) {
    const [brandCurrent,setBrandCurrent] = useState(initStateBrand);
    const { data } = useSelector(state => state.brands);
    const { dataProducts } = useSelector(state => state.products);
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() =>{
        dispatch(getBrands())
        dispatch(getProducts());
    },[])

    useEffect(() =>{
        if(Number(id)){
        idBrand(id)
        }
    },[id])

    const idBrand = (id) => {
        let idCv = Number(id);
        let index = data.findIndex(item => item.id == idCv);
        setBrandCurrent({
            id:idCv,
            attributes:data[index].attributes})
    }
    return (
        <Index>
            <Box sx={{m:5}}>
                <Grid container spacing={1} >
                    <Grid item xs={3} md={3} >
                        <MenuBar idBrand = {idBrand} brands={data}/>
                    </Grid>
                    <Grid item xs={9} md={9} >
                    {brandCurrent === initStateBrand ?
                        (<Typography gutterBottom variant="h5" component="div" align="center" sx={{color: '#9c27b0'}}>
                        Hân hạnh được chia sẻ với các bạn Brand nỗi tiếng cộng tác với chúng tôi
                        </Typography>)
                        : (<>
                            <DetailBrand brand = {brandCurrent.attributes}/>
                            <Typography gutterBottom variant="h4" component="div" align="left" sx={{color: '#9c27b0'}}>
                                    Những sản phẩm tiêu biển của Brand
                            </Typography>
                            <Grid container spacing={1}>
                                {dataProducts.map((product) => (
                                 product.attributes.idBrand == brandCurrent.id &&
                                 (<Grid item xs={6} md={4} key={product.id}>
                                     <CardProducts  product = {product}/>           
                                 </Grid>)
                                ))}
                            </Grid>
                        </>)
                        }
                    </Grid>
                </Grid>

            </Box>
        </Index>
    );
}

export default Brand;