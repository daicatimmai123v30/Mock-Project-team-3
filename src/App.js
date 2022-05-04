import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarTools from './components/AppBarTools/AppBarTools';
import Index from "./views/Index";
import Category from './components/Category/Category';
import ListProducts from './components/ListProducts/ListsProducts';
import Login from './components/Login-SignUp/Login';
import SignUp from "./components/Login-SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
    {/* <AppBarTools/> */}
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route exact path="/Index" element={<Index/>} />
        <Route exact path="/category" element={<Category/>} />
        <Route exact path="/Products" element={<ListProducts/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
