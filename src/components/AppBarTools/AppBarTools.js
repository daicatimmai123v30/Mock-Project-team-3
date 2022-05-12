import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Container from '@mui/material/Container';
import { logout } from "../../actions/auth";
import Button from '@mui/material/Button';
import { Link, Navigate } from "react-router-dom";

const AppBarTools = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [isLoggedOut,setIsLoggedOut] = useState(false);
  const dispatch = useDispatch();
  const logOut = () =>{
    dispatch(logout())
  }
  return (
    <AppBar position="static" sx={{ bgcolor:'#9c27b0'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/home"} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2,color: 'white', display: 'flex' }}
          >
            Team 3
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Link to={"/category"} style={{ textDecoration: 'none' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Category
              </Button>
            </Link>
            <Link to={"/Products?pg=1"} style={{ textDecoration: 'none' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Product
              </Button>
              </Link>
              <Link to={"/Brands"} style={{ textDecoration: 'none' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Brands
              </Button>
              </Link>
          </Box>
          <Box>
            <Link to={currentUser ? "/Profile" : "/login"} style={{ textDecoration: 'none' }}>
              <IconButton aria-label="User">
                <PersonIcon  fontSize="large" sx={{ color: '#f3e5f5' }} />
              </IconButton>
            </Link>
            { currentUser &&
            <>
            <Link to={"/home"} style={{ textDecoration: 'none' }}>
              <IconButton aria-label="Your Cart">
                <AddShoppingCartIcon  fontSize="large" sx={{ color: '#f3e5f5' }} />
              </IconButton>
            </Link>
            <Link to={"/home"}>
              <IconButton aria-label="Your Cart" onClick={logOut}>
                <LogoutIcon  fontSize="large" sx={{ color: '#f3e5f5' }} />
              </IconButton>
            </Link>
              </>
              }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarTools;
