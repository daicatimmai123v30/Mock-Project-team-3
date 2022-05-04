import React, { useEffect, useState, useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Pagination,
  CardMedia,
} from "@mui/material";
 import AppBarTools from '../AppBarTools/AppBarTools';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from '../../actions/types'  
 
import "./ListProducts.css";   
import axios from "axios";

const ListsProducts = () => {
  const [products, setProducts] = useState([]);
  const [amountProducts,setAmountProducts] = useState(0);
  const distpatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { search } = useLocation();
  const navigate = useNavigate();
  const getProducts =async (pg)=>{
    try {
      const response = await axios.get(`${API_URL}/api/products?pg=${pg}`);
      if(response.data.success){
        setProducts(response.data.products);
        setAmountProducts(response.data.amountProducts);
      }else{
        alert(response.data.messages);
      }
    } catch (error) {
      alert(error.toString());
    }
  }
  useEffect(() => {
    getProducts(Number(search.split("=")[1]));
   
  }, []);

  const onAddToCart = async(product) => {
    if (auth.isLoggedIn) {
      // distpatch(ADD_CART,product)
    } else {
      alert("Bạn phải đăng nhập");
    }
  };

  return (
    <>
      <AppBarTools/>
      <div className="list-products container-fluid">
        <div className="products">
          <div className="my-3">
            <Typography align="right" variant="subtitle1">
              Sản phẩm
            </Typography>
            <div className="w-100 border border-dark my-1"></div>
          </div>
          <div className="box-products">
            {products.map((value, index) => (
              <Card
                key={index}
                sx={{
                  width: 250,
                  float: "left",
                  marginLeft: 2.5,
                  marginRight: 2.5,
                  marginBottom: 1,
                }}
              >
                <CardMedia
                  image={value.images[0]}
                  sx={{ width: "100%", height: "400px" }}
                ></CardMedia>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                  <Typography
                    sx={{ mt: 1.5, textAlign: "right" }}
                    color="text.secondary"
                  >
                    {value.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-around" }}>
                  <Button size="small">Xem chi tiết</Button>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => {
                      onAddToCart(value);
                    }}
                  >
                    Thêm Vào
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>

        <div className="pagination">
          <Stack spacing={1}>
            <Pagination
              count={parseInt(
                amountProducts / 8 + 1
              )}
              color="secondary"
              page={Number(search.split("=")[1])}
              onChange={(event, number) => {
                navigate(`/Products?pg=${number}`);
                window.location.reload();
                // getProducts(Number(search.split("=")[1]));
                
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default ListsProducts;
