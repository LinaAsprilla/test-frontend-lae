import { Input, Badge, Avatar, Dropdown, Menu } from "antd";
import {
  BellOutlined,
  UserOutlined,
  LoginOutlined,
  DownOutlined,
} from "@ant-design/icons";

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

const Notification = ({ numNotification }) => {
  return (
    <Badge count={numNotification} size="small">
      <BellOutlined />
    </Badge>
  );
};

const AvatarUser = ({ username }) => {
  const menu = (
    <Menu>
      <Menu.Item icon={<LoginOutlined />} key='2'>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
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
          }}
          icon={<UserOutlined />}
        ></Avatar>
      </Dropdown>
    </>
  );
};

export { SearchInput, Notification, AvatarUser };
