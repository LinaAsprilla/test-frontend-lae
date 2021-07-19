import { Button, Input, Row, Col, Select, Table, Tag, Form } from "antd";
import firebase from "../../../firebase/firebaseConfig";
import { useState, useEffect } from "react";

const { Search } = Input;
const { Option } = Select;

const UserList = () => {
  //VARIABLES DEL FORMULARIO
  const initialStateValues = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
  };

  //ESTADO DE LAS VARIABLES
  const [values, setValues] = useState(initialStateValues);
  const [users, setUsers] = useState([]);
  const [selectedItems, setSelectedItems] = useState("");

  //DATOS PARA LAS TABLAS
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Teléfono",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Estado",
      key: "state",
      dataIndex: "state",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color;
            if (tag === "Activo") {
              color = "green";
            } else {
              color = "red";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  ////DATOS PARA LAS TABLAS
  const data = users.map((el) => ({
    key: el.id,
    name: el.name,
    lastname: el.lastname,
    phone: el.phone,
    email: el.email,
    state: [el.state],
  }));

  //BASE DE DATOS USUARIOS
  const db = firebase.firestore().collection("consumers");

  //OBTENER VALORES DE LOS INPUTS DEL FORMULARIO
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //CAPTURAR EL CAMBIO DEL INPUT SELECT
  const selectOnChange = (value) => {
    setSelectedItems(value);
  };

  //AGREGAR USUARIO A LA BD
  const addUser = () => {
    db.doc().set({
      id: users.length + 1,
      name: values.name,
      lastname: values.lastname,
      phone: values.phone,
      email: values.email,
      state: selectedItems,
    });
    setValues(initialStateValues);
    setSelectedItems("");
  };

  useEffect(() => {
    //TRAER USUARIOS DE LA BD Y ORDENARLOS
    const getUsers = db.orderBy("name", "asc").onSnapshot((snapshot) => {
      const docs = [];
      if (snapshot.empty) {
        console.log("No hay documentos");
      }
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUsers(docs);
      console.log(docs);
    });
    return () => getUsers();
  }, []);

  return (
    <>
      <div className="content-header">
        <div>
          <h2>Usuarios</h2>
        </div>

        <div>
          <Search placeholder="Buscar usuarios" style={{ width: 200 }} />
        </div>
      </div>
      <div className="card-list">
        <Row>
          <Col span={18} push={6}>
            <Table columns={columns} dataSource={data} />
          </Col>
          <Col span={5} pull={18}>
            <div className="i-group">
              <label>Nombre</label>
              <input
                name="name"
                onChange={handleInputChange}
                value={values.name}
              />
            </div>
            <div className="i-group">
              <label>Apellido</label>
              <input
                name="lastname"
                onChange={handleInputChange}
                value={values.lastname}
              />
            </div>
            <div className="i-group">
              <label>Teléfono</label>
              <input
                name="phone"
                onChange={handleInputChange}
                value={values.phone}
              />
            </div>
            <div className="i-group">
              <label>Email</label>
              <input
                name="email"
                onChange={handleInputChange}
                value={values.email}
              />
            </div>
            <label>Estado</label>
            <div className="i-group">
              <Select
                showSearch
                value={selectedItems}
                style={{ width: 200 }}
                placeholder="Selecciona un estado"
                optionFilterProp="children"
                onChange={selectOnChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="Activo">Activo</Option>
                <Option value="Inactivo">Inactivo</Option>
              </Select>
            </div>
            <Button type="primary" onClick={addUser}>
              Añadir usuario
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UserList;
