import { Space, Spin } from "antd";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SiderDemo from "../../components/Header/Header";
import { db } from "../../firebase/firebase-config";
import { deleteWish } from "../../store/wishes/actions";
import { getWisheslist } from "../../store/wishes/actions";
import WishCard from "./WishCard";

function Wishes() {
  const store = useSelector(state => state)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const wishesCollectionRef = collection(db, "wishes");
  const getWishes = async () => {
    const data = await getDocs(wishesCollectionRef);
    const allWishes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const filteredWishes = allWishes.filter((wish) => wish.token === localStorage.jwt)
    dispatch(getWisheslist(filteredWishes));
    setLoading(false);
  };

  const deleteWishItem = async (id) => {
    await deleteDoc(doc(db, "wishes", id));
    const deletedWshlist = await store.wishes.filter((item) => item.id !== id)
    dispatch(deleteWish(deletedWshlist))
  }

  useEffect(() => {
      getWishes()
  }, [])

  return (
    <div>
      <SiderDemo />
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
        <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
          {
              store.wishes.map((item) => {
                  const {id, name, description, price, images} = item
                  return(
                      <WishCard 
                      key={id}
                      img={images}
                      productName={name}
                      price={price}
                      description={description}
                      handleClick={() => deleteWishItem(id)}
                      />
                  )
              })
          }
        </div>
      )}
    </div>
  );
}

export default Wishes;
