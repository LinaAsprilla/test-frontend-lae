import styled from "styled-components";

const Wrapper = styled.div`
  .ant-layout {
    min-height: 100vh;
  }
  aside {
    background: #ffffff;
    border-right: 1px solid #eee;
  }
  .logo {
    width: 100%;
  }
  .aside-top {
    border-bottom: 1px solid #eee;
    padding: 12px 0.5rem;
  }
  .ant-menu-item .ant-menu-item-icon,
  .ant-menu-submenu-title .ant-menu-item-icon,
  .ant-menu-item .anticon,
  .ant-menu-submenu-title .anticon {
    font-size: 18px;
  }

  .aside-menu {
    padding-top: 10px;
  }
  .ant-layout-sider-trigger {
    background: #ffffff;
    border-top: 1px solid #eee;
    width: 199px;
  }
  .anticon-setting,
  .ant-btn-link {
    color: rgb(0 0 0 / 85%);
  }
  .ant-layout-header {
    box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
    border-bottom: 1px solid #eee;
    background: #ffffff;
    line-height: 0px;
    height: 72px;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ant-btn-primary {
    background: #2ba8d9;
    border-color: #2ba8d9;
  }
  .ant-badge {
    font-size: 20px;
  }
  .toolbar {
    display: flex;
    align-items: center;
    p {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 20px;
      margin-right: 10px;
    }
  }
  main {
    padding: 30px;
    background-color: #f8f9fa;
    .content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 0px;
      }
    }
    .card-list {
      margin-top: 40px;
      background: white;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 1.3rem 1.3rem;

      input {
        background-color: #f4f5f9;
        border: 2px solid #f4f5f9;
        font-size: 13px;
        padding-left: 20px;
        color: #4f5d77;
        width: 100%;
        border-radius: 4px;
        height: 36px;
        margin-top: 5px
      }
      .i-group{
        margin-bottom: 30px;
      }
      label{
        font-size: 13px;
      }
      button{
        width: 100%;
        border-radius: 5px;
      }
    }
  }
`;
export default Wrapper;
