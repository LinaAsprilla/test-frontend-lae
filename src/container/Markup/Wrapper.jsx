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
  .ant-btn > span {
    color: rgb(0 0 0 / 85%);
  }
`;
export default Wrapper;
