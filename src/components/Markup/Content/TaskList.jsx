import {
  Button,
  Input,
  Row,
  Col,
  Table,
  Space,
  Popconfirm,
  Form,
  InputNumber,
} from "antd";
import firebase from "../../../firebase/firebaseConfig";
import { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Search } = Input;

const TaskList = (props) => {
  //ESTADO DE LAS VARIABLES
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  //EDITAR INPUTS
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  //CANCELAR EDICIÓN
  const cancel = () => {
    setEditingKey("");
  };

  //GUARDAR EDICIÓN
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...tasks];
      const index = newData.findIndex((item) => key === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setTasks(newData);
        await db.doc(item.id).update({ name: newData[index].name });
        setEditingKey("");
      } else {
        newData.push(row);
        setTasks(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  //DATOS PARA LAS TABLAS
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "Acción",
      key: "state",
      dataIndex: "state",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="##"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Guardar
            </a>
            <Popconfirm title="¿Estás seguro?" onConfirm={cancel}>
              <a>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle">
            <EditOutlined
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            />
            <Popconfirm
              title="¿Estás seguro?"
              onConfirm={() => handleDelete(record.key)}
            >
              <DeleteOutlined />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  ////DATOS PARA LAS TABLAS
  const data = tasks.map((el) => ({
    key: el.id,
    name: el.name,
  }));

  //BASE DE DATOS USUARIOS
  const db = firebase.firestore().collection("tasks");

  //OBTENER VALORES DE LOS INPUTS DEL FORMULARIO
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //ELIMINAR TAREA
  const handleDelete = (key) => {
    db.doc(key).delete();
  };

  //AGREGAR TAREA A LA BD
  const addTask = () => {
    db.doc().set({
      name: name,
    });
    setName("");
  };

  //EDITAR TAREAS

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `¡Por favor ingrese ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  useEffect(() => {
    //TRAER TAREAS DE LA BD Y ORDENARLOS
    const getTaks = db.onSnapshot((snapshot) => {
      const docs = [];
      if (snapshot.empty) {
        console.log("No hay documentos");
      }
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTasks(docs);
      props.setTask(docs.length);
    });
    return () => getTaks();
  }, []);

  return (
    <>
      <div className="content-header">
        <div>
          <h2>Tareas</h2>
        </div>

        <div>
          <Search placeholder="Buscar tareas" style={{ width: 200 }} />
        </div>
      </div>
      <div className="card-list">
        <Row>
          <Col span={18} push={6}>
            <Form form={form} component={false}>
              <Table
                className="editable-row"
                columns={mergedColumns}
                dataSource={data}
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                pagination={{
                  onChange: cancel,
                }}
              />
            </Form>
          </Col>
          <Col span={5} pull={18}>
            <div className="i-group">
              <label>Nombre</label>
              <input name="name" onChange={handleInputChange} value={name} />
            </div>
            <Button type="primary" onClick={addTask}>
              Añadir tarea
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default TaskList;
