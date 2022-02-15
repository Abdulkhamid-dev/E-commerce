import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { StyledProduct } from "./ProductDetails.style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button, Tooltip } from "antd";
import SiderDemo from "../../components/Header/Header";

function ItemDetails() {
  const [user, setUser] = useState({});
  const params = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const [load, setLoad] = useState(true)

  const [itemNum, setItemNum] = useState(1);
  const [wish, setWish] = useState(false);
  const dicrementNum = () => {
    if (itemNum === 1) {
      setItemNum(1);
    } else {
      setItemNum((prev) => prev - 1);
    }
  };
  const getSingleData = async () => {
    const docRef = doc(db, "products", params.productId);
    await getDoc(docRef).then((doc) => {
      setUser({ ...doc.data(), id: doc.id });
      setLoad(false)
      console.log(doc.data(), doc.id);
      console.log(user);
    });
  };

  useEffect(() => {
    getSingleData();
  }, []);
  const setGender = (event) => {
    console.log(event.target.value);
  };

  return (
    <StyledProduct>
      <SiderDemo />
      {
        load ? null : <>
          <Button type="link" style={{marginTop: 20, marginLeft: 20, fontSize: 20}}>
       <Link to="/shop">Back</Link>
      </Button>
      <div className="wrapper">
        <div className="content">
          <div className="img_block">
           <div>
           <img src={user.images[0]} alt="clothes" style={{ objectFit: 'cover', width: '100%', height: '100%',  maxWidth: "550px", maxHeight: "306px"}} />
           </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img style={{margin: 3, objectFit: 'cover', width: '100%', height: '100%', maxWidth: "275px", maxHeight: "275px"}} src={user.images[1]} alt="clothes" />
              <img style={{margin: 3, objectFit: 'cover', width: '100%', height: '100%', maxWidth: "275px", maxHeight: "275px"}} src={user.images[2]} alt="clothes"/>
            </div>
          </div>
          <div className="info_block">
            <div className="price">
              <h3>{user.name}</h3>
              <span>
                <p>${user.price}</p>
              </span>
            </div>
            <div>
              <p className="desc">{user.description}</p>
            </div>
            <div className="size" onChange={setGender}>
              <div>
                <input type="radio" id="s" name="drone" value="s" checked />
                <label for="s">S</label>
              </div>
              <div>
                <input type="radio" id="m" name="drone" value="m" />
                <label for="m">M</label>
              </div>
              <div>
                <input type="radio" id="l" name="drone" value="l" />
                <label for="l">L</label>
              </div>
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
              <Button type="primary">ADD TO CART</Button>
              <Tooltip title={wish ? "Remove wish list" : "Add wish list"}>
                <div className="wish_list" onClick={() => setWish(!wish)}>
                  {wish ? (
                    <AiFillHeart size={20} color="blue" />
                  ) : (
                    <AiOutlineHeart size={20} color="blue" />
                  )}
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
        </>
      }
    </StyledProduct>
  );
}

export default ItemDetails;
