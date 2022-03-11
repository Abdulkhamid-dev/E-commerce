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
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getWisheslist } from "../../store/wishes/actions";
import { getCardlist } from "../../store/cards/actions";
import { signOutAction } from "../../store/auth/actions";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

function SiderDemo() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { auth, wishes, cards } = store;
  const wishesCollectionRef = collection(db, "wishes");
  const cardsCollectionRef = collection(db, "card");

   const getWishes = async () => {
    const data = await getDocs(wishesCollectionRef);
    const allWishes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const filteredWishes = allWishes.filter(
      (wish) => wish.token === store?.auth?.token
    );
    dispatch(getWisheslist(filteredWishes));
  };
   const getCards = async () => {
    const data = await getDocs(cardsCollectionRef);
    const allcards = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const filteredCard = allcards.filter(
      (wish) => wish.cardData.token === auth?.token
    );
    dispatch(getCardlist(filteredCard));
  };
  const signOut = () => {
    localStorage.clear();
    dispatch(signOutAction())
    window.location.reload(true);
    
  }

  useEffect(() => {
    getWishes();
    getCards();
  }, []);
  const menu = (
    <Menu>
      {store.auth.token ? (
        <Menu.Item>
          <a
          onClick={signOut}
            target="_blank"
            rel="noopener noreferrer"
          >
            Log out
          </a>
        </Menu.Item>
      ) : (
        <Menu.Item>
          <Link to="/signin">Sign in</Link>
        </Menu.Item>
      )}
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
            </Menu>
          </Menu>
        </div>
        <div className="account">
          <div className="notification">
            <Link to="/wishes">
              <a>
                <AiOutlineHeart style={{ color: "#1890ff", fontSize: 25 }} />
              </a>
            </Link>
            <span className="count">{wishes.length}</span>
          </div>
          <div className="notification">
            <Link to="/card">
              <a href="#!">
                <RiShoppingBasket2Line
                  style={{ color: "#1890ff", fontSize: 25 }}
                />
              </a>
            </Link>
            <span className="count">{cards.length}</span>
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
