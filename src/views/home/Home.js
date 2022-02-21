import { Carousel, Button, Row, Col } from "antd";
import { StyledHome } from "./Home.style";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import FooterSection from "../../components/footer/Footer";
import SiderDemo from "../../components/Header/Header";
import { Link } from "react-router-dom";

const HomeSection = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: "400px",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };
  let iconStyles = { color: "#1890ff", fontSize: "45px" };

  return (
    <StyledHome>
      <SiderDemo />
      <Carousel afterChange={onChange} autoplay dotPosition="right">
        <div>
          <h3 style={contentStyle}>
            <div className="content">
              <div className="dark"></div>
              <div className="text">
                <h2>SHOP OUR NEW COLLECTION</h2>
                <p>FROM HIGHT TO LOW, CLASSIC OR MODERN. WE HAVE YOU COVERED</p>
                <Button type="primary">
                  <Link to="/shop">SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className="content_second">
              <div className="dark"></div>
              <div className="text">
                <h2>MYSTERY DEALS</h2>
                <p>FROM HIGHT TO LOW, CLASSIC OR MODERN. WE HAVE YOU COVERED</p>
                <Button type="primary">
                  <Link to="/shop">SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </h3>
        </div>
      </Carousel>
      <div>
        <Row className="opportunity_section">
          <Col xs={12} s={12} sm={12} md={6} lg={6} xl={6}>
            <MdOutlineDeliveryDining style={iconStyles} />
            <h3>Payment & Delivery</h3>
            <p>Free shipping for orders over $50</p>
          </Col>
          <Col xs={12} s={12} sm={12} md={6} lg={6} xl={6}>
            <VscDebugRestart style={iconStyles} />
            <h3>Return & Refund</h3>
            <p>Free 100% money back guarantee</p>
          </Col>
          <Col xs={12} s={12} sm={12} md={6} lg={6} xl={6}>
            <RiSecurePaymentFill style={iconStyles} />
            <h3>Secure Payment</h3>
            <p>100% secure payment</p>
          </Col>
          <Col xs={12} s={12} sm={12} md={6} lg={6} xl={6}>
            <BiSupport style={iconStyles} />
            <h3>Quality Support</h3>
            <p>Always online feedback 24/7</p>
          </Col>
        </Row>
      </div>
      <FooterSection />
    </StyledHome>
  );
};

export default HomeSection;
