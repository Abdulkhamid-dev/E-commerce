import React, { useEffect, useState } from "react";
import { getDoc, doc, addDoc, collection, getDocs } from "firebase/firestore";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { StyledProduct } from "./ProductDetails.style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button, Tooltip, Spin, Space, message } from "antd";
import SiderDemo from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getWisheslist } from "../../store/wishes/actions";
import { getCardlist } from "../../store/cards/actions";

function ItemDetails() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const wishRef = collection(db, "wishes");
  const cardRef = collection(db, "card");
  const [data, setData] = useState({});
  const [wishList, setWishList] = useState({});
  const params = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const [load, setLoad] = useState(true);
  const [itemNum, setItemNum] = useState(1);
  const [wish, setWish] = useState(false);
  const [word, setWord] = useState("s");
  const [numSize, setNumSize] = useState();
  const handleInput = (e) => {
    console.log(e.target.value);
    setNumSize(e.target.value);
  };
  console.log(store);

  const dicrementNum = () => {
    if (itemNum === 1) {
      setItemNum(1);
    } else {
      setItemNum((prev) => prev - 1);
    }
  };
  const getWishes = async () => {
    const data = await getDocs(wishRef);
    const allWishes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const filteredWishes = allWishes.filter((wish) => wish.token === localStorage.jwt)
    dispatch(getWisheslist(filteredWishes));
    console.log('dssss');
  };
  const getCards = async () => {
    const data = await getDocs(cardRef);
    const allcards = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const filteredCard = allcards.filter(
      (wish) => wish.cardData.token === store?.auth?.token
    );
    dispatch(getCardlist(filteredCard));
  };
  // GETTING DATA BY ID
  const getSingleData = async () => {
    const docRef = doc(db, "products", params.productId);
    await getDoc(docRef).then((doc) => {
      console.log(doc);
      setData({ ...doc.data(), id: doc.id });
      setWishList({ ...doc.data() });
      setLoad(false);
      console.log(doc.data(), doc.id);
    });
  };
  // GETTING DATA BY ID
  console.log(wishList);
  // ADD WISH LIST
  const addWishList = () => {
    if (localStorage.jwt) {
      addDoc(wishRef, { ...wishList, token: localStorage?.jwt })
        .then((doc) => {
          message.info("Added to wishlist");
          getWishes()
        })
        .catch((err) => {
          message.error(err.message);
        });
    } else {
      window.location.pathname = "/signin";
    }
  };
  // ADD WISH LIST
  // ADD TO CARD
  const sizeProduct = data?.collection === "shoes" ? numSize : word;
  const cardData = {
    name: data.name,
    price: data.price,
    images: data.images,
    description: data.description,
    size: sizeProduct,
    numberOfproduct: itemNum,
    token: localStorage?.jwt,
  };

  const addToCard = () => {
    console.log(cardData);
    if (localStorage.jwt) {
      addDoc(cardRef, {
        cardData,
      })
        .then((doc) => {
          message.info("Added to card");
          getCards()
        })
        .catch((err) => {
          message.error(err.message);
        });
    } else {
      window.location.pathname = "/signin";
    }
  };
  // ADD TO CARD

  useEffect(() => {
    getSingleData();
  }, []);
  const setGender = (event) => {
    console.log(event.target.value);
  };

  return (
    <StyledProduct>
      <SiderDemo />
      {load ? (
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
          <Button
            type="link"
            style={{ marginTop: 20, marginLeft: 20, fontSize: 20 }}
          >
            <Link to="/shop">Back</Link>
          </Button>
          <div className="wrapper">
            <div className="content">
              <div className="img_block">
                <div>
                  <img
                    src={data.images[0]}
                    alt="clothes"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      maxWidth: "550px",
                      maxHeight: "306px",
                    }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{
                      margin: 3,
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      maxWidth: "275px",
                      maxHeight: "275px",
                    }}
                    src={data.images[1]}
                    alt="clothes"
                  />
                  <img
                    style={{
                      margin: 3,
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      maxWidth: "275px",
                      maxHeight: "275px",
                    }}
                    src={data.images[2]}
                    alt="clothes"
                  />
                </div>
              </div>
              <div className="info_block">
                <div className="price">
                  <h3>{data.name}</h3>
                  <span>
                    <p>${data.price}</p>
                  </span>
                </div>
                <div>
                  <p className="desc">{data.description}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "3px" }}>Size:</h4>
                  {data.collection == "shoes" ? (
                    <>
                      <input
                        type="number"
                        style={{
                          outline: "none",
                          border: "1px solid",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        value={numSize}
                        onChange={handleInput}
                      />
                    </>
                  ) : (
                    <select
                      style={{
                        outline: "none",
                        border: "1px solid",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                    >
                      <option value="s">S</option>
                      <option value="l">L</option>
                      <option value="xl">XL</option>
                      <option value="xxl">XXL</option>
                    </select>
                  )}
                </div>
                <div className="actions">
                  <div className="number">
                    <button onClick={dicrementNum}>-</button>
                    <input
                      type="number"
                      step="1"
                      value={itemNum}
                      onChange={(e) => setItemNum(e.target.value)}
                    />
                    <button onClick={() => setItemNum((prev) => prev + 1)}>
                      +
                    </button>
                  </div>
                  <Button type="primary" onClick={addToCard}>
                    ADD TO CART
                  </Button>
                  <Tooltip title={wish ? "Remove wish list" : "Add wish list"}>
                    <div className="wish_list" onClick={() => setWish(!wish)}>
                      {wish ? (
                        <AiFillHeart size={20} color="blue" />
                      ) : (
                        <AiOutlineHeart
                          onClick={addWishList}
                          size={20}
                          color="blue"
                        />
                      )}
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </StyledProduct>
  );
}

export default ItemDetails;
