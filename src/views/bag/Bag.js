import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import SiderDemo from "../../components/Header/Header";
import { StyledBagCard } from "./BagCard.style";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button, Space, Spin } from "antd";

function Bag() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();

  const cardCollections = collection(db, "card");

  const getData = async () => {
    const data = await getDocs(cardCollections);
    const allcards = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const filteredCard = allcards.filter(
      (wish) => wish.cardData.token === localStorage.jwt
    );
    setData(filteredCard);
    setLoading(false);
  };
  const totalPrice = () => {
      var num = 0;
       data.map(item=>num+=item.cardData.price*item.cardData.numberOfproduct)
       setTotal(num)
  }
 
  const deleteCard = async (id) => {
    await deleteDoc(doc(db, "card", id));
    await setData(data.filter((item) => item.id !== id));
    // await totalPrice();
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    totalPrice();
  }, [data]);

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
                 {
                     data.map((item) => {
                         const {cardData, id} = item;
                      return(
                        <tr key={id}>
                        <td>
                          <a onClick={() => deleteCard(id)}>
                            <RiDeleteBinLine size="25" color="#1890ff" />
                          </a>
                        </td>
                        <td>
                          <img
                            src={cardData.images[0]}
                            alt="clothe"
                          />
                        </td>
                        <td className="product">{cardData.name}</td>
                        <td className="price">${cardData.price}.00</td>
                        <td className="qty">{cardData.numberOfproduct}</td>
                        <td className="size">{typeof cardData.size === 'number' ? cardData.size : cardData.size.toUpperCase()}</td>
                        <td className="total">${cardData.price * cardData.numberOfproduct}.00</td>
                      </tr>
                      )
                     })
                 }
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
                <Button type="primary">Buy now</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </StyledBagCard>
  );
}

export default Bag;
