import React from "react";
import { Layout } from "antd";
import SiderDemo from "../../components/Header/Header";
import Shop from "../shop/Shop";
import FooterSection from "../../components/footer/Footer"
import { StyledMain } from "./main.style";
import HomeSection from "../home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Main() {
  return (
    <StyledMain>
      <Layout className="main">
       <SiderDemo/>
       <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
      </Layout>
    </StyledMain>
  );
}

export default Main;
