import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

function FooterSection() {
  return (
    <div>
      <Footer className="footer_section" style={{ textAlign: "center" }}>
        Ant Design ©2022 Created by <a href="#!" style={{fontSize: "16px", fontWeight: "bold"}}>ShopLine</a>
      </Footer>
    </div>
  );
}

export default FooterSection;
