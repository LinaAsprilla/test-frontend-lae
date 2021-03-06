import { Input, Badge, Avatar, Dropdown, Menu } from "antd";
import { BellOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import firebase from "../../../firebase/firebaseConfig";


//BUSCADOR
const SearchInput = () => {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="Buscar"
      allowClear
      onSearch={onSearch}
      enterButton
      style={{ width: 300 }}
    />
  );
};

//NOTIFICACIÓN DE TAREA NUEVA
const Notification = ({ numNotification }) => {
  return (
    <Badge count={numNotification} size="small">
      <BellOutlined />
    </Badge>
  );
};

//IMAGEN DEL USUARIO
const AvatarUser = ({ username }) => {
  const logOut = () => {
    firebase.auth().signOut();
  };

  const menu = (
    <Menu>
      <Menu.Item icon={<LoginOutlined />} key="2">
        <a href="/login" onClick={logOut}>
          Cerrar sesión
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <p>Hola, {username} </p>
      <Dropdown overlay={menu}>
        <Avatar
          style={{
            backgroundColor: "#2BA8D9",
            cursor: "pointer",
          }}
          icon={<UserOutlined />}
        ></Avatar>
      </Dropdown>
    </>
  );
};

export { SearchInput, Notification, AvatarUser };
