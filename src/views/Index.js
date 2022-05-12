import { Container } from '@mui/material';
import React from 'react';
import AppBarTools from '../components/AppBarTools/AppBarTools';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
function Index(props) {
    return (
        <>
            <AppBarTools/>
                <Container>
                    {props.children}
                </Container>
            <Footer/>
        </>
    );
}

export default Index;