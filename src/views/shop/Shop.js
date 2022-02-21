import React, { useState, useEffect } from "react";
import { StyledShopSection } from "./Shop.style";
import { db } from "../../firebase/firebase-config";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { collection, getDoc, getDocs, addDoc, doc } from "firebase/firestore";
import {
  Drawer,
  Button,
  Select,
  Skeleton,
  Switch,
  Card,
  Avatar,
  Row,
  Col,
  Checkbox,
  Typography,
  Collapse,
  Slider,
  Pagination,
} from "antd";
import LoadingCard from "./LoadingCard";
import Cards from "./Cards";
import FooterSection from "../../components/footer/Footer";
import SiderDemo from "../../components/Header/Header";
const { Option } = Select;
const { Meta } = Card;
const { Title, Text } = Typography;
const { Panel } = Collapse;

function Shop() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [pureState, setPureState] = useState([]);
  const [single, setSingle] = useState({});
  const productCollectionRef = collection(db, "products");
  const cardCollectionRef = collection(db, "card");

  const getProducts = async () => {
    const data = await getDocs(productCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setPureState(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const addToCard = async () => {
    await addDoc(cardCollectionRef, { name: "me" });
  };

  const getSingleData = async (id) => {
    const docRef = doc(db, "products", id);
    await getDoc(docRef).then((doc) => {
      setSingle({});
      setSingle({...doc.data(), id: doc.id})
      console.log(doc.data(), doc.id);
      console.log(single);
    });
  };

  console.log(products);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const filterCollection = (value) => {
    console.log(value);
    if (value.value === "all") {
      setProducts(pureState);
    } else {
      const filteredState = pureState?.filter(
        (i) => i.collection.toLowerCase() === value.value
      );
      setProducts(filteredState);
    }
  };

  const priceChange = (value) => {
    console.log("onChange: ", value);
  };
  const priceChangeAfter = (value) => {
    console.log("onChange: ", value);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <StyledShopSection>
      <SiderDemo />
      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text type="dark" style={{ fontWeight: 550, fontSize: 16 }}>
              Filters
            </Text>
            <Text
              type="warning"
              style={{
                fontWeight: 500,
                fontSize: 14,
                padding: 5,
                cursor: "pointer",
              }}
            >
              Clean all
            </Text>
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={"left"}
      >
        <Collapse
          expandIconPosition={"right"}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <Panel
            header={<Title level={5}>SIZE</Title>}
            key="2"
            style={{ border: "none" }}
          >
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Row>
                <Col span={8}>
                  <Checkbox value="XS">XS</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="S">S</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="M">M</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="L">L</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="XL">XL</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="XL">XL</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="XXL">XXL</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Panel>
        </Collapse>
        <Collapse
          expandIconPosition={"right"}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <Panel
            header={<Title level={5}>BRAND</Title>}
            key="2"
            style={{ border: "none" }}
          >
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Row>
                <Col span={8}>
                  <Checkbox value="Adidas">Adidas</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Nike">Nike</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Gucci">Gucci</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Zara">Zara</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Asics">Asics</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Louis Vuitton">Louis Vuitton</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Panel>
        </Collapse>
        <Collapse
          expandIconPosition={"right"}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <Panel
            header={<Title level={5}>PRICE</Title>}
            key="2"
            style={{ border: "none" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text type="secondary" style={{ fontWeight: 550, fontSize: 16 }}>
                Price Range
              </Text>
              <Text
                type="warning"
                style={{
                  fontWeight: 550,
                  fontSize: 16,
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                Filter
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text type="secondary">$0</Text>
              <Text type="secondary">$100</Text>
            </div>
            <Slider
              range
              tooltip="$"
              step={10}
              defaultValue={[0, 100]}
              onChange={priceChange}
              onAfterChange={priceChangeAfter}
            />
          </Panel>
        </Collapse>
      </Drawer>
      <div className="header_shop">
        <div>
          <span>
            Showing <strong>{products.length}</strong> Products
          </span>
        </div>
        <div className="sort">
          <p>Sort by:</p>
          <Select
            showSearch
            style={{ width: 200 }}
            labelInValue
            defaultValue={{ value: "All" }}
            style={{ width: 120 }}
            onChange={filterCollection}
          >
            <Option value="all">All</Option>
            <Option value="shoes">Shoes</Option>
            <Option value="clothes">Clothes</Option>
          </Select>
          <Button type="primary" onClick={showDrawer}>
            Filter
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          {loading ? (
            <LoadingCard />
          ) : (
            products.map((item) => {
              const { id, name, description, price, images, brand } = item;
              return (
                <Cards
                  click={`/product/${id}`}
                  id={id}
                  key={id}
                  description={description}
                  name={name}
                  images={images[0]}
                  brand={brand}
                />
              );
            })
          )}
        </div>
        <Pagination />
      </div>
      <FooterSection />
    </StyledShopSection>
  );
}

export default Shop;
