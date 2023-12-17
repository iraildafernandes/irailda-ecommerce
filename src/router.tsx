import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./Contexts/userContext";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/productDetails";
import SearchResults from "./Pages/SearchResults";
import MyAccount from "./Pages/MyAccount";

const RouterApp: React.FC = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search/:id" element={<SearchResults />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />

      {isAuthenticated ? 
        <Route path="/account" element={<MyAccount />} />
        :
        <Route path="/" element={<Home />} />
      }
    </Routes>
  );
};

export default RouterApp;
