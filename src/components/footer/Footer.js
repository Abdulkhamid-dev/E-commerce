import React from "react";
import { Layout } from "antd";
import { StyledFooter } from "./Footer.style";

const { Footer } = Layout;

function FooterSection() {
  return (
    <StyledFooter>
      <Footer className="footer_section" style={{ textAlign: "center" }}>
        Ant Design ©2022 Created by <a href="#!" style={{fontSize: "16px", fontWeight: "bold"}}>ShopLine</a>
      </Footer>
    </StyledFooter>
  );
}

export default FooterSection;
