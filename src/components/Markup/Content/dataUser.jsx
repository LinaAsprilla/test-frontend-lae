import { Tag } from "antd";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
    render: (state) => (
      <>
        {state.map((tag) => {
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

const data = [
  {
    key: "1",
    name: "John ",
    lastname: 'Brown',
    phone: "New York No. 1 Lake Park",
    email: 'jhon@hotmail.com',
    state: ["Activo"],
  },
  {
    key: "2",
    name: "Jim ",
    lastname: 'Green',
    phone: "London No. 1 Lake Park",
    email: 'jhon@hotmail.com',
    state: ["Inactivo"],
  },
  {
    key: "3",
    name: "Joe",
    lastname: 'Black',
    phone: "Sidney No. 1 Lake Park",
    email: 'jhon@hotmail.com',
    state: ["Activo"],
  },
];

export { columns, data };
