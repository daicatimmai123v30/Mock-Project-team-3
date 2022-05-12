import React,{useEffect, useState} from 'react';
import Index from '../../views/Index';
import Grid from '@mui/material/Grid';
import Menu from './Menu';
import { useSelector } from "react-redux";
import ProfileDetai from "./ProfileDetail";
function Profile(props) {
    const { user } = useSelector(state => state.auth);
    const [isProfile,setIsProfile] = useState('PROFILE');
    const changePage = (isPage) =>{
        console.log(isPage)
        isPage === 'PROFILE' && setIsProfile('PROFILE')
        isPage === 'HISTORYORDER' && setIsProfile('HISTORYORDER')
        isPage === 'Cart' && setIsProfile('Cart')
    }
    return (
        <Index>
            <Grid container spacing={1} sx={{m:5}}>
                <Grid item xs={12} md={3} onChangePage={changePage}>
                    <Menu/>
                </Grid>
                <Grid item xs={12} md={9}>
                   {isProfile === 'PROFILE' && <ProfileDetai user = {user.user}/>}
                </Grid>
            </Grid>
        </Index>
    );
}

export default Profile;