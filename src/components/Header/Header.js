import React, { useState, useEffect } from "react";
import {RiShoppingBasket2Line, RiUserLine} from 'react-icons/ri'
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

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

function SiderDemo() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <StyledSidebar>
      <Layout className="main">
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
                  Home
                </Menu.Item>
                <Menu.Item className="menu_item" key="2">
                  Shop
                </Menu.Item>
                <Menu.Item className="menu_item" key="3">
                  Bag
                </Menu.Item>
              </Menu>
            </Menu>
          </div>
          <div className="account">
           <div className="notification">
           <a href="#!" className="bag_count">
              <RiShoppingBasket2Line style={{color: '#1890ff',  fontSize: 25}}/>
            </a >
              <span className="count">1</span>
           </div>
           <span className="user">
           <Dropdown overlay={menu} placement="bottomRight" arrow>
            <RiUserLine  style={{color: '#1890ff',  fontSize: 25}}/>
            </Dropdown>
           </span>
          </div>
        </Header>
        <Layout>
          <HomeSection/>
        </Layout>
      </Layout>
    </StyledSidebar>
  );
}

export default SiderDemo;
