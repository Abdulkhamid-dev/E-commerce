import styled from "styled-components";
import bgImg from "../../../assets/img/login_bg.jpg";

export const StyledSignIn = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgImg});
  display: flex;
  align-items: center;
  justify-content: center;
  input::placeholder {
    color: rgba(255, 255, 255, 1);
    font-family: sans-serif;
    font-style: normal;
    font-weight: lighter;
    font-size: 14px;
    line-height: 20px;
  }
  .content {
    width: 300px;
    height: 398px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 71px;
    }
    form {
        text-align: right;
      div {
        cursor: pointer;
        height: 45px;
        display: flex;
        align-items: center;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 13px;
        img {
          margin-right: 20px;
        }
        input {
          color: rgba(255, 255, 255, 1);
          width: 100%;
          font-family: sans-serif;
          font-style: normal;
          font-weight: lighter;
          font-size: 14px;
          line-height: 20px;
          background-color: transparent;
          outline: none;
          border: none;
        }
      }
      button {
        position: relative;
        width: 100%;
        height: 45px;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        outline: none;
        border: none;
        font-weight: 600;
        font-size: 16px;
        color: #2148C0;
        cursor: pointer;
        margin-bottom: 5px;
        transition: 0.2s ease-in-out;
        &:hover{
            box-shadow: none;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        }
      }
      a{
        font-weight: 300;
        font-size: 16px;
        color: #FFFFFF;
      }
    }
  }
`;
