import React from 'react'
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
const {Meta} = Select

function LoadingCard() {
  return (
    <div>
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
    </div>
  )
}

export default LoadingCard