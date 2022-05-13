import React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Container from '@mui/material/Container';

function Menu(props) {
    const profile = () =>{
        console.log(1)
        props.onHandlerChangePage('PROFILE')
    }
    const historyOrder = () =>{
        console.log(1)
        props.onHandlerChangePage('HISTORYORDER')
    }
    const cart = () =>{
        console.log(1)
        props.onHandlerChangePage('Cart')
    }
    return (
        <>
            <Container>
                <Avatar sx={{ bgcolor: deepOrange[500],mx:'auto',width: 70, height: 70}}>A</Avatar>
            </Container>
            <Paper sx ={{m:2}}>
                <MenuList>
                        <MenuItem onClick={() =>profile}>Profile</MenuItem>
                        <MenuItem onClick={() =>historyOrder}>Lịch sử Order</MenuItem>
                        <MenuItem onClick={() =>cart}>Giỏ hàng</MenuItem>
                </MenuList>
            </Paper>
        </>
    );
}

export default Menu;