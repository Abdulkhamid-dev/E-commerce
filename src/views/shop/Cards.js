import React, {useState, useEffect} from "react";
import {Link,  useParams, useSearchParams } from "react-router-dom";
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
function Cards(props) {
  return (
    <Link to={props.click}>
    <Card
      hoverable
      key={props.id}
      id={props.id}
      style={{ width: 280, margin: 6, float: "left" }}
      cover={
        <img
          alt="example"
          style={{ objectFit: "cover", width: 280, height: 200 }}
          src={props.images}
        />
      }
      actions={[
        <AiOutlineShoppingCart key="setting" />,
        <AiOutlineHeart key="edit" />,
      ]}
    >
     <Meta title={props.name} description={props.brand} />
    </Card>
     </Link>
  );
}

export default Cards;
