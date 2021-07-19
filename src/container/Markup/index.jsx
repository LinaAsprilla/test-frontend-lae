import React, { useContext, useState, useEffect } from "react";
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
import { useHistory } from "react-router-dom";
import { Auth } from "../../context/stateUser";
import firebase from "../../firebase/firebaseConfig";

const { Header, Sider, Content } = Layout;

const Index = () => {
  const [menuKey, setMenuKey] = useState("1");
  const [numTaks, setNumTaks] = useState("");
  const { users } = useContext(Auth);
  const [username, setUsername] = useState("");

  const history = useHistory();

  const currentMenu = (e) => {
    setMenuKey(e.key);
  };

  useEffect(() => {
    if (!users) {
      history.push("login");
    }
    const getUsername = () => {
      if (users) {
        const user = firebase.auth().currentUser.email;
        firebase
          .firestore()
          .collection("users")
          .doc(user)
          .onSnapshot((doc) => {
            setUsername(doc.data().username);
          });
      } else {
        return null;
      }
    };
    getUsername();
  }, []);

  return (
    <>
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

                  <AvatarUser username={username} />
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
    </>
  );
};

export default Index;
