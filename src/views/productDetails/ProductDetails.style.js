import styled from "styled-components";

export const StyledProduct = styled.div`
.wrapper{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.img_block, .info_block {
  max-width: 600px;
  width: 100%;
}
  .content {
    div{
      margin: 10px;
    }
    display: flex;
    align-items: top;
    justify-content: center;
  }
  .number {
    border: 1px solid;
    border-radius: 6px;
    width: 70px;
    display: flex;
    align-items: center;
    input {
      -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input,
    button {
      width: 100%;
      background-color: transparent;
      color: black;
      font-size: 15px;
      font-weight: 600;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
  .wish_list {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  .actions {
    display: flex;
    align-items: center;
  }
  .size {
    div {
      display: flex;
      align-items: center;
      margin: 5px;
      label {
        padding: 3px;
      }
    }
    display: flex;
    align-items: center;
  }
  .price{
    h3{
      font-size: 20px;
      font-weight: bold;
    }
    p{
      font-size: 20px;
      font-weight: normal;
    }
  }
  .desc{
    font-size: 14px;
    font-weight: normal;
  }
  @media only screen and (max-width: 800px) {
    .content{
      display: block;
    }

  }
`;
