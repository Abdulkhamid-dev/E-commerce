import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { deleteCard } from "../../store/cards/actions";
import { getCardlist } from "../../store/cards/actions";
import SiderDemo from "../../components/Header/Header";
import { StyledBagCard } from "./BagCard.style";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button, Space, Spin, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Bag() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [userToken, setUserToken] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });
  const cardCollections = collection(db, "card");

  const getData = async () => {
    setData(store.cards);
    setLoading(false);
  };
  const totalPrice = () => {
    var num = 0;
    data.map(
      (item) => (num += item.cardData.price * item.cardData.numberOfproduct)
    );
    setTotal(num);
  };

  const deleteCards = async (id) => {
    await deleteDoc(doc(db, "card", id));
    const deletedData = data.filter((item) => item.id !== id);
    setData(deletedData);
    await dispatch(deleteCard(deletedData));
  };

  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:5000/checkout", {
      token,
      product,
    });

    console.log(response.status);
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    totalPrice();
  }, [data]);
  useEffect(() => {
    setProduct({
      name: "Some Products",
      price: total + 0.0,
      description: "Simple shopping",
    });
  }, [total]);

  return (
    <StyledBagCard>
      <SiderDemo />
      <div className="bagMain">
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              marginTop: "250px",
            }}
          >
            <Space size="large">
              <Spin size="large" />
            </Space>
          </div>
        ) : (
          <>
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>DELETE</th>
                    <th>IMAGE</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SIZE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {store.cards.map((item) => {
                    const { cardData, id } = item;
                    return (
                      <tr key={id}>
                        <td>
                          <a onClick={() => deleteCards(id)}>
                            <RiDeleteBinLine size="25" color="#1890ff" />
                          </a>
                        </td>
                        <td>
                          <img src={cardData.images[0]} alt="clothe" />
                        </td>
                        <td className="product">{cardData.name}</td>
                        <td className="price">${cardData.price}.00</td>
                        <td className="qty">{cardData.numberOfproduct}</td>
                        <td className="size">
                          {typeof cardData.size === "number"
                            ? cardData.size
                            : cardData.size.toUpperCase()}
                        </td>
                        <td className="total">
                          ${cardData.price * cardData.numberOfproduct}.00
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                marginTop: "15px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 style={{ marginTop: "10px", marginRight: "10px" }}>
                  Total price: ${total}.00
                </h4>
                <StripeCheckout
                  amount={total}
                  name={data[0]?.name}
                  billingAddress
                  shippingAddress
                  token={handleToken}
                  stripeKey="pk_test_51KXUZyHxISu3Gi2qJgg8OqLBmsxONU1xlnsezMd1uKrsROjrLsLdNreEGvUjBpYZNJ24wROM3Z1BvB2y6syyMXwB00UMwfj90j"
                >
                  <Button type="primary">Buy now</Button>
                </StripeCheckout>
              </div>
            </div>
          </>
        )}
      </div>
    </StyledBagCard>
  );
}

export default Bag;
