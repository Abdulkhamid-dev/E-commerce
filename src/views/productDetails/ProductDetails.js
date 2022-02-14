import React, { useState } from "react";
import { StyledProduct } from "./ProductDetails.style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button, Tooltip } from "antd";
import SiderDemo from "../../components/Header/Header";

function ItemDetails() {
  const [itemNum, setItemNum] = useState(1);
  const [wish, setWish] = useState(false);
  const dicrementNum = () => {
    if (itemNum === 1) {
      setItemNum(1);
    } else {
      setItemNum((prev) => prev - 1);
    }
  };
  const setGender = (event) => {
    console.log(event.target.value);
  };
  return (
    <StyledProduct>
      <SiderDemo/>
     <div className="wrapper">
     <div className="content">
        <div className="img_block">
          <img
            src="https://cdn.shopify.com/s/files/1/0018/9225/3766/products/ms-training-t-shirt-polyester-t-shirt-gymnation-dark-navy-s-471848_1200x.jpg?v=1631883358"
            alt="clothes"
          />
        </div>
        <div className="info_block">
          <div className="price">
            <h3>Ribbed Bodycon Dress</h3>
            <span>
              <p>$30.00</p>
            </span>
          </div>
          <div>
            <p className="desc">
              A pair of twill woven shorts featuring slanted front pockets,
              buttoned back pockets, a zip pocket, buttoned waist, and keychain
              loop.
            </p>
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
              <button onClick={() => setItemNum((prev) => prev + 1)}>+</button>
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
    </StyledProduct>
  );
}

export default ItemDetails;
