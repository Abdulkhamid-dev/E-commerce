import { useState } from "react";
import { Carousel, Button  } from "antd";
import { StyledHome } from "./Home.style";

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

  return (
    <StyledHome>
      <Carousel afterChange={onChange} autoplay dotPosition="right">
        <div>
          <h3 style={contentStyle}>
            <div className="content">
                <div className="dark"></div>
             <div className="text">
             <h2>SHOP OUR NEW COLLECTION</h2>
              <p>
              FROM HIGHT TO LOW, CLASSIC OR MODERN. WE HAVE YOU COVERED
              </p>
              <Button type="primary">SHOP NOW</Button>
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
              <p>
              FROM HIGHT TO LOW, CLASSIC OR MODERN. WE HAVE YOU COVERED
              </p>
              <Button type="primary">SHOP NOW</Button>
             </div>
            </div>
          </h3>
        </div>
      </Carousel>
    </StyledHome>
  );
};

export default HomeSection;
