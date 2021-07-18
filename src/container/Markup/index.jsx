import React, { useState } from "react";
import { Layout } from "antd";
import Wrapper from "./Wrapper";
import AsideMenu, {
  Configuration,
  Logo,
} from "../../components/Markup/AsideMenu";
import logo from "../../assets/images/LAE-Logo-PNG.png";
import {
  AvatarUser,
  Notification,
  SearchInput,
} from "../../components/Markup/Header";

const { Header, Footer, Sider, Content } = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Wrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="aside-top">
            <Logo logo={logo} />
          </div>
          <div className="aside-menu">
            <AsideMenu />
          </div>
        </Sider>
        <Configuration />
        <Layout>
          <Header>
            <SearchInput />
            <div className="toolbar">
              <Notification numNotification={5} />
              <AvatarUser username='Carlos' />
            </div>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

export default Index;
