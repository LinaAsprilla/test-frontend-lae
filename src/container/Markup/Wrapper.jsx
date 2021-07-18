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
  
`;
export default Wrapper;
