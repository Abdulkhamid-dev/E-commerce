import React, { useState, useEffect } from "react";
import { RiShoppingBasket2Line, RiUserLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StyledSidebar } from "./Header.style";
import { Layout, Menu, Dropdown, Button, Input } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
  MailOutlined,
} from "@ant-design/icons";
import HomeSection from "../../views/home/Home";
import Shop from "../../views/shop/Shop";
import FooterSection from "../footer/Footer";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

function SiderDemo() {
  const menu = (
    <Menu>
     {
       localStorage.jwt ? ( <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>) : (
         <Menu.Item>
        <Link to="/signin">
          Sign in
        </Link>
       </Menu.Item>
      )
     }
    </Menu>
  );
  return (
    <StyledSidebar>
        <Header className="header">
          <div>
            <div className="logo">
              <a href="#!">
                <ShoppingCartOutlined style={{ fontSize: 30 }} />
                ShopLine
              </a>
            </div>
            <Menu theme="dark" className="nav" defaultSelectedKeys={["2"]}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item className="menu_item" key="1">
                <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item className="menu_item" key="2">
                <Link to="/shop">Shop</Link>
                </Menu.Item>
                <Menu.Item className="menu_item" key="3">
                  Bag
                </Menu.Item>
              </Menu>
            </Menu>
          </div>
          <div className="account">
            <div className="notification">
              <Dropdown
                style={{ padding: 10 }}
                className="bag_count"
                overlay={menu}
                placement="bottomLeft"
                arrow
              >
                <a href="#!">
                  <AiOutlineHeart
                    style={{ color: "#1890ff", fontSize: 25 }}
                  />
                </a>
              </Dropdown>
              <span className="count">0</span>
            </div>
            <div className="notification">
              <Dropdown
                style={{ padding: 10 }}
                className="bag_count"
                overlay={menu}
                placement="bottomLeft"
                arrow
              >
                <a href="#!">
                  <RiShoppingBasket2Line
                    style={{ color: "#1890ff", fontSize: 25 }}
                  />
                </a>
              </Dropdown>
              <span className="count">1</span>
            </div>
            <span className="user">
              <Dropdown
                style={{ padding: 10 }}
                overlay={menu}
                placement="bottomRight"
                arrow
              >
                <a href="#!">
                  <RiUserLine style={{ color: "#1890ff", fontSize: 25 }} />
                </a>
              </Dropdown>
            </span>
          </div>
        </Header>
    </StyledSidebar>
  );
}

export default SiderDemo;
