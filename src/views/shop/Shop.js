import React, { useState, useEffect } from "react";
import { StyledShopSection } from "./Shop.style";
import {db} from '../../firebase/firebase-config';
import {collection, getDoc, getDocs} from 'firebase/firestore'
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
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const productCollectionRef = collection(db, "products")

  const getProducts = async () =>{
    const data = await getDocs(productCollectionRef);
    setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  console.log(products);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
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
    getProducts()
  },[])
  return (
    <StyledShopSection>
          <SiderDemo/>
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
            Showing <strong> 12 of 37</strong> Products
          </span>
        </div>
        <div className="sort">
          <p>Sort by:</p>
          <Select
            showSearch
            style={{ width: 200 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="shoes">Shoes</Option>
            <Option value="clothes">Clothes</Option>
            <Option value="electronic">Electronics</Option>
            <Option value="jewellery">Jewellery</Option>
          </Select>
          <Button type="primary" onClick={showDrawer}>
            Filter
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          {loading ? <LoadingCard/> : <Cards/>}
        </div>
       <Pagination/>
      </div>
      <FooterSection/>
    </StyledShopSection>
  );
}

export default Shop;
