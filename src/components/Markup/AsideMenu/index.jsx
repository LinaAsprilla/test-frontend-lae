import React from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  TeamOutlined,
  SolutionOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

//IMPORTAR LOGO EMPRESA
const Logo = ({ logo }) => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo LAE" className="logo" />
    </Link>
  );
};

//CREAR ASIDEMENU
const AsideMenu = (props) => {
  return (
    <>
      <Menu
        onClick={props.currentMenu}
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          Usuarios
        </Menu.Item>
        <Menu.Item key="3" icon={<SolutionOutlined />}>
          Tareas
        </Menu.Item>
      </Menu>
    </>
  );
};

//CONFIGURACION DEL ASIDEMENU
const Configuration = () => {
  return (
    <div className="ant-layout-sider-trigger">
      <Button icon={<SettingOutlined />} type="link">
        Configuración
      </Button>
    </div>
  );
};

//INICIO
const Home = () => {
  return (
  <h2>Inicio</h2>
  );
};

export default AsideMenu;
export { Logo, Configuration, Home };
