import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

//TITULO DEL FORMULARIO
const TitleForm = ({ title }) => {
  return <h2 className="form-title">{title} </h2>;
};

//PLANTILLA DEL FORMULARIO
const FormRL = ({ type }) => {
  return (
    <>
      {type === "register" ? (
        <Form name="register-form" initialValues={{ remember: true }}>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Por favor ingrese un correo válido",
              },
              {
                required: true,
                message: "Por favor ingrese su correo",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Correo Electrónico"
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Por favor ingrese su usuario" },
            ]}
            hasFeedback
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuario"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingrese su contraseña" },
              {
                min: 7,
                message: "Contraseña muy corta, mínimo 7 caracteres",
              },
              {
                validator(_, value) {
                  if (/(?=.*[0-9])/g.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("La contraseña debe tener al menos un número")
                  );
                },
              },
              {
                validator(_, value) {
                  if (/(?=.*[A-Z])/g.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "La contraseña debe tener al menos un letra en mayúscula"
                    )
                  );
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Por favor confirma tu contraseña",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Las dos contraseñas no coinciden")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Repite tu contraseña"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registrarme
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form name="login-form" initialValues={{ remember: true }}>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Por favor ingrese un correo válido",
              },
              {
                required: true,
                message: "Por favor ingrese su correo",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Correo Electrónico"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

//IMAGEN DEL FORMULARIO
const ImageForm = ({ image }) => {
  return (
    <figure>
      <img src={image} alt="Logo-LAE" />
    </figure>
  );
};

//LINK DEL FORMULARIO
const LinkForm = ({ type }) => {
  return (
    <>
      {type === "register" ? (
        <Link to="/login"> Ya tengo una cuenta</Link>
      ) : (
        <Link to="/"> Crear una cuenta</Link>
      )}
    </>
  );
};

export default FormRL;
export { TitleForm, ImageForm, LinkForm };
