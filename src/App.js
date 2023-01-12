import React from "react";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
// import Cart from "./pages/Cart";
// import { Cart } from "./pages/Cart";
// import { Cart } from "./pages";
import Cart from "./pages/Cart";
export default function App() {
return (
  <>
    <AppNavbar title="React Store" />
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/:productId" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
  
    </>
  );
}