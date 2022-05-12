import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category/Category';
import ListProducts from './components/ListProducts/ListsProducts';
import Login from './components/Login-SignUp/Login';
import SignUp from "./components/Login-SignUp/SignUp";
import ProductDetail from "./components/ProductDetail";
import Brand from "./components/Brand/Brand";
import Home from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { getBrands } from "./actions/brands";
import Profile from "./components/Profile/Profile";

function App() {
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getBrands)
  // },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="*" element={<Home/>} />
        <Route exact path="/Category" element={<Category/>} />
        <Route exact path="/Products" element={<ListProducts/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/detail" element={<ProductDetail/>} />
        <Route path="/Brands" element={<Brand/>} />
        <Route path="/Brands/:id" element={<Brand/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
