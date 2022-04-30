import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { productsListSelector } from '../selector/selectors';
import {useLocation} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Stack,
    Pagination,
    CardMedia,
    
  } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProductDetail = ()=> {
    
    const [isSelect, setIsSelect] = useState('');
    const {search} =useLocation();
    
    const listProducts= useSelector(productsListSelector);
    let tam={};
    listProducts.forEach(prd=>{
        
        if(search.split('=')[1]===prd.id){tam=prd;} 
    });
    
    const product=tam;
   const handleSelectSize= (e)=>{
       
       setIsSelect(e.target.value);
   }
    return (
        
       <>
            <Typography
                align='center'
                borderBottom={1}
                padding={2}
                marginBottom={2}
             >Detail</Typography>

            <Box sx={{ flexGrow: 1 }} marginTop={5}>
            <Grid container spacing={2} columns={5}>
                <Grid item xs={3}>
                    
                        <Card
                           key={1}
                            sx={{
                                width: 270,
                                height: 300,
                                float: 'left',
                                marginLeft: 5.5,
                                marginRight: 2.5,
                                marginBottom: 1
                            }}
                            >  
                            <CardMedia 
                                image={product.images[0]}
                                sx={{width:'100%',height:'100%'}}
                                >
                            </CardMedia>
                        </Card>
                        <Card
                           key={2}
                            sx={{
                                width: 270,
                                height: 300,
                                float: 'left',
                                marginLeft: 5.5,
                                marginRight: 2.5,
                                marginBottom: 1
                            }}
                            >  
                            <CardMedia 
                                image={product.images[1]}
                                sx={{width:'100%',height:'100%'}}
                                >
                            </CardMedia>
                        </Card>
                    
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Box sx={{ flexGrow: 1 }} borderBottom={1} padding={2}>
                            <Grid container spacing={2} columns={5}>
                                <Grid item xs={4}> 
                                    <Typography
                                        align='left'
                                        variant='h5'
                                        >{product.title}    
                                    </Typography>
                                    <Typography
                                        align='left'
                                        >{product.description}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography
                                        align='right'
                                
                                        >{product.price}$
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>  
                        
                        <Typography
                            marginTop={5}
                            align='left'
                            marginBottom={3}
                            >
                            <ArrowRightIcon align='left'/>Select Size
                           
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                '& > :not(style)': {
                                m: 1,
                                width: 50,
                                height: 50,
                                },
                            }}
                            textAlign='center'
                            marginBottom={5}
                            >
                            {product.size.map((pr,index) => (
                                <Button variant={isSelect===pr?'contained':'outlined'}  key={index} onClick={handleSelectSize} value={pr}>{pr} </Button>
                            ))}
                            
                            
                        </Box>
                        <Button variant='contained' color='success'>Thêm vào giỏ</Button>
                    </Item>
                </Grid>
            </Grid>
            </Box>  
        
        </>
        
        
    );
}

export default ProductDetail;