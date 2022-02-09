import React, { useState } from "react";
import { StyledShopSection } from "./Shop.style";
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
} from "antd";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const { Option } = Select;
const { Meta } = Card;
const { Title, Text } = Typography;
const { Panel } = Collapse;

function Shop() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const priceChange = (value) => {
    console.log('onChange: ', value);
  }
  const priceChangeAfter = (value) => {
    console.log('onChange: ', value);
  }
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <StyledShopSection>
      <Drawer
        title={<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
           <Text type="dark" style={{fontWeight: 550, fontSize: 16}}>Filters</Text>
              <Text type="warning" style={{fontWeight: 500, fontSize: 14, padding: 5, cursor: "pointer"}}>Clean all</Text>
        </div>}
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Text type="secondary" style={{fontWeight: 550, fontSize: 16}}>Price Range</Text>
              <Text type="warning" style={{fontWeight: 550, fontSize: 16, padding: 5, cursor: "pointer"}}>Filter</Text>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
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
      {loading ? (
        <Row gutter={[24, 16]}>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={24} s={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <Card style={{ width: "100%", marginTop: 16 }} loading={true}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      ) : (
        <div style={{}}>
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
      )}
    </StyledShopSection>
  );
}

export default Shop;
