import styled from "styled-components";

export const StyledBagCard = styled.div`
  .bagMain {
    padding-top: 50px;
    padding-left: 55px;
    padding-right: 55px;
  }
  thead {
    background-color: #f2f2f2;
    tr {
      border-color: #1890ff;
      th {
        color: #747474;
        font-size: 14px;
        font-weight: 600;
        padding: 10px;
        text-align: center;
      }
    }
    th {
      padding: 10px;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }


  tr {
    background-color: transparent;
    border-bottom: 1px solid black;
  }
  tbody{
      tr{
          td{
              text-align: center;
              padding: 10px;
              border-bottom: 1px solid #ddd;
              border-right: 1px solid #ddd;
              img{
                  width: 80px;
                  height: 95px;
                  object-fit: cover;
              }
          }
          .product{
            color: #747474;
            font-size: 14px;
            font-weight: 600;
          }
          .price{
            color: #1890ff;
            font-size: 14px;
            font-weight: 600;
          }
          .qty, .size{
            color: #747474;
            font-size: 14px;
            font-weight: 600;
          }
          .total{
            color: #1890ff;
            font-size: 14px;
            font-weight: 600;
          }
      }
  }
`;
