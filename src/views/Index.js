import React from 'react';
import AppBarTools from '../components/AppBarTools/AppBarTools';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
function Index(props) {
    return (
        <>
            <AppBarTools/>
            <div>
            {props.children}
            </div>
            <Footer/>
        </>
    );
}

export default Index;