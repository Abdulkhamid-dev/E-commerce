import React from "react";
import {
  Select,
  Card,
  Avatar,
  Row,
  Col,
  Checkbox,
  Collapse,
  Slider,
} from "antd";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const { Meta } = Card;
function Cards() {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 280, margin: 6, float: "left" }}
        cover={
          <img
            alt="example"
            style={{ objectFit: "cover", width: 280, height: 200 }}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        actions={[
          <AiOutlineShoppingCart key="setting" />,
          <AiOutlineHeart key="edit" />,
        ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 280, margin: 6, float: "left" }}
        cover={
          <img
            alt="example"
            style={{ objectFit: "cover", width: 280, height: 200 }}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        actions={[
          <AiOutlineShoppingCart key="setting" />,
          <AiOutlineHeart key="edit" />,
        ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 280, margin: 6, float: "left" }}
        cover={
          <img
            alt="example"
            style={{ objectFit: "cover", width: 280, height: 200 }}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        actions={[
          <AiOutlineShoppingCart key="setting" />,
          <AiOutlineHeart key="edit" />,
        ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 280, margin: 6, float: "left" }}
        cover={
          <img
            alt="example"
            style={{ objectFit: "cover", width: 280, height: 200 }}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        actions={[
          <AiOutlineShoppingCart key="setting" />,
          <AiOutlineHeart key="edit" />,
        ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 280, margin: 6, float: "left" }}
        cover={
          <img
            alt="example"
            style={{ objectFit: "cover", width: 280, height: 200 }}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        actions={[
          <AiOutlineShoppingCart key="setting" />,
          <AiOutlineHeart key="edit" />,
        ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        hoverable
        style={{ width: 280, margin: 6, float: "left" }}
        cover={
          <img
            alt="example"
            style={{ objectFit: "cover", width: 280, height: 200 }}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        actions={[
          <AiOutlineShoppingCart key="setting" />,
          <AiOutlineHeart key="edit" />,
        ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
}

export default Cards;
