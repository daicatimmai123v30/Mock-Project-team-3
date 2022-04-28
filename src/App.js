import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarTools from './components/AppBarTools/AppBarTools';
import Index from "./views/Index";
import Home from "./components/Home";

import  Product from './components/Product';
import Login from './components/Login-SignUp/Login';
import SignUp from "./components/Login-SignUp/SignUp";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <AppBarTools/>
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route exact path="/Index" element={<Index/>} />
        <Route exact path="/category" element={<Category/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
