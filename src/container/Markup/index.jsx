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
import TaskList from "../../components/Markup/Content/TaskList";

const { Header, Footer, Sider, Content } = Layout;

const Index = () => {

  const [menuKey, setMenuKey] = useState("1");
  const [numTaks, setNumTaks] = useState('');

  const currentMenu = (e) => {
    setMenuKey(e.key);
  };

  return (
    <StateMenu.Provider value={menuKey}>
      <Wrapper>
        <Layout>
          <Sider trigger={null}>
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
                <Notification numNotification={numTaks} />
                <AvatarUser username="Carlos" />
              </div>
            </Header>
            <Content>
              <StateMenu.Consumer>
                {(state) =>
                  state === "1" ? (
                    <Home />
                  ) : state === "2" ? (
                    <UserList />
                  ) : (
                    <TaskList setTask={setNumTaks} />
                  )
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
