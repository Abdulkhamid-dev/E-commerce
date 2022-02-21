import styled from "styled-components";

export const StyledWishlist = styled.div`
.block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #c3c4c6;
    margin-top: 5px;
    .img_block{
        margin-right: 20px;
        img{
            max-width: 150px;
            max-height: 240px;
            min-width: 150px;
            min-height: 240px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .info_block{
        margin-left: 15px;
        h3{
            font-size: 24px;
            font-weight: 600;
        }
    }

    @media only screen and (max-width: 760px) {
       .info_block{
        h3 {
            font-size: 16px;
          }
       }
       img{
        max-width: 120px;
        max-height: 200px;
        min-width: 120px;
        min-height: 200px;
    }
      }
}
`