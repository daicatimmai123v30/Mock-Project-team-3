import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarTools from './components/AppBarTools/AppBarTools';
import Index from "./views/Index";
import Category from './components/Category/Category';
import ListProducts from './components/ListProducts/ListsProducts';
import Login from './components/Login-SignUp/Login';
import SignUp from "./components/Login-SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
    {/* <AppBarTools/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Category" element={<Category/>} />
        <Route exact path="/Products" element={<ListProducts/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/detail" element={<ProductDetail/>} />
      </Routes>
    
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
