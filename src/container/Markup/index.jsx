import React, { useState } from "react";
import { Layout } from "antd";
import Wrapper from "./Wrapper";
import AsideMenu, {
  Configuration,
  Home,
  Logo,
} from "../../components/Markup/AsideMenu";
import logo from "../../assets/images/LAE-Logo-PNG.png";
import {
  AvatarUser,
  Notification,
  SearchInput,
} from "../../components/Markup/Header";
import StateMenu from "../../context/stateMenu";
import UserList from "../../components/Markup/Content/UserList";

const { Header, Footer, Sider, Content } = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuKey, setMenuKey] = useState("1");

  const currentMenu = (e) => {
    setMenuKey(e.key);
  };

  return (
    <StateMenu.Provider value={menuKey}>
      <Wrapper>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="aside-top">
              <Logo logo={logo} />
            </div>
            <div className="aside-menu">
              <AsideMenu currentMenu={currentMenu} />
            </div>
          </Sider>
          <Configuration />
          <Layout>
            <Header>
              <SearchInput />
              <div className="toolbar">
                <Notification numNotification={5} />
                <AvatarUser username="Carlos" />
              </div>
            </Header>
            <Content>
              <StateMenu.Consumer>
                {(state) =>
                  state === "1" ? <Home /> : state === "2" ? <UserList /> : null
                }
              </StateMenu.Consumer>
            </Content>
          </Layout>
        </Layout>
      </Wrapper>{" "}
    </StateMenu.Provider>
  );
};

export default Index;
