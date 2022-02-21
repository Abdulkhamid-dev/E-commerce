import React from "react";
import { Layout } from "antd";
import SiderDemo from "../../components/Header/Header";
import Shop from "../shop/Shop";
import ProductDetails from "../productDetails/ProductDetails";
import FooterSection from "../../components/footer/Footer"
import { StyledMain } from "./main.style";
import HomeSection from "../home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../auth/signIn/SignIn";
import SignUp from "../auth/signUp/SignUp";
import Wishes from "../wishes/Wishes";
import Bag from "../bag/Bag";

function Main() {
  return (
    <StyledMain>
      <Layout className="main">
       <Routes>
    <Route path="*" element={<HomeSection />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/wishes" element={<Wishes/>} />
      <Route path="/card" element={<Bag/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
      </Layout>
    </StyledMain>
  );
}

export default Main;
