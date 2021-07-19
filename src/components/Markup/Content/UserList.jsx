import { Button, Input, Row, Col, Select, Table } from "antd";
import { columns, data } from "../Content/dataUser";

const { Search } = Input;
const { Option } = Select;


const UserList = () => {
  return (
    <>
      <div className="content-header">
        <div>
          <h2>Usuarios</h2>
          <p>Añade, edita o elimina un usuario</p>
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
              <Input name="name" />
            </div>
            <div className="i-group">
              <label>Apellido</label>
              <Input name="lastname" />
            </div>
            <div className="i-group">
              <label>Teléfono</label>
              <Input name="phone" />
            </div>
            <div className="i-group">
              <label>Email</label>
              <Input name="email" />
            </div>
            <label>Estado</label>
            <div className="i-group">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Selecciona un estado"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="True">Activo</Option>
                <Option value="False">Bloqueado</Option>
              </Select>
            </div>
            <Button type="primary"> Añadir usuario</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UserList;
