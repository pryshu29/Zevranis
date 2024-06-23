import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Shop from './Pages/Shop.js';
import ShopCategory from './Pages/ShopCategory.js';
import Product from './Pages/Product.js';
import Cart from './Pages/Cart.js'
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import Footer from './Components/Footer/Footer.js'
import men_banner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kid_banner from './Components/Assests/banner_kids.png';
import React from "react";
import ReactDOM from "react-dom/client";
import ShopContextProvider from "../src/Context/ShopContext.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
require('dotenv').config()

function App(){
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory    Category="men" banner={men_banner} />} />
          <Route path='/womens' element={<ShopCategory Category="women" banner={women_banner}/>} />
          <Route path='/kids'  element={<ShopCategory Category="kid" banner={kid_banner}/>}/>
          <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />          
        </Routes>
        <Footer/>
        </BrowserRouter>   
        </>
    )
}



root.render(
  <ShopContextProvider>
      <App/>
  </ShopContextProvider>
);