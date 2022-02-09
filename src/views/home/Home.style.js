import styled from "styled-components";
import imgUrl from "../../assets/img/carousel.webp";
import imgUrlSecond from "../../assets/img/carousel_2.jpg";

export const StyledHome = styled.div`
padding: 0px 0px;
.content{
    display: inline-block;
    transition: 1s all .1s;
    text-align: center!important;
    width: 100%;
    height: 100%;
    background-color: red;
    background-image: url(${imgUrl});  
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    .dark{
        position: absolute;
        background-color: black;
        opacity: 0.6;
        height: 100%;
        width: 100%;
    }
   .text{
       height: 100%;
       text-align: center;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
    h2{
        opacity: 1;
        transform: translateY(0);
        color: #f9f9f9;
        font-size: 40px;
        margin: 0;
        
    }
    p{
        opacity: 1;
        transform: translateY(0);
        color: #f9f9f9;
        font-size: 14px;
        font-weight: 550;
        margin: 10px 0 15px;
    }
   }
}
.opportunity_section{
    padding: 30px 26px;
    background-color: #001529;
    display: flex;
    text-align: center;
    div{
        width: calc(100% / 4);
            h3{
                margin-bottom: 5px;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: .05em;
                color: #fff;
            }
            p{
                font-size: 15px;
                font-weight: 300;
                letter-spacing: 0;
                color: #777;
            }
    }
 }
.content_second {
    display: inline-block;
    transition: 1s all .1s;
    text-align: center!important;
    width: 100%;
    height: 100%;
    background-color: red;
    background-image: url(${imgUrlSecond});  
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    .dark{
        position: absolute;
        background-color: black;
        opacity: 0.6;
        height: 100%;
        width: 100%;
    }
   .text{
       height: 100%;
       text-align: center;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
    h2{
        opacity: 1;
        transform: translateY(0);
        color: #f9f9f9;
        font-size: 40px;
        margin: 0;
        
    }
    p{
        opacity: 1;
        transform: translateY(0);
        color: #f9f9f9;
        font-size: 14px;
        font-weight: 550;
        margin: 10px 0 15px;
    }
   }
`;
