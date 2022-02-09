import styled from "styled-components";

export const StyledSidebar = styled.div`
  .main {
    min-height: 100vh;
  }
  .header {
    display: felx;
    justify-content: space-between;
    align-items: center;
    div {
      display: felx;
      align-items: center;
    }
  }
  .searchForm {
    margin-top: 12px;
    margin-left: 10px;
  }
  .nav {
    margin-left: 10px;
  }
  .menu_item {
    border-radius: 6px;
    margin: 0px 3px;
  }
  .logo {
    display: felx;
    width: 120px;
    height: 100%;
    align-items: center;
    a {
      padding: 0px 4px;
      display: felx;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      color: #1890ff;
    }
  }
  .account {
    display: felx;
    align-items: center;
    justify-content: center;
      .notification{
        position: relative;
          .count{
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 16px;
            height: 16px;
            border-radius: 50%;
            font-weight: 400;
            font-size: 10px;
            line-height: 1;
            margin-left: -8px;
            margin-top: -30px;
            color: #fff;
            z-index: 1;
            background-color: #c96;
        }
      }
  }

  .ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }

  .site-layout-background {
    background: #fff;
  }
`;
