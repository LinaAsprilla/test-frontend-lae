import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormRL, {
  ImageForm,
  LinkForm,
  TitleForm,
} from "../../../components/Form/index";
import Wrapper, {
  Main,
  ValidateForm,
  ValidateImage,
} from "../../../components/Form/Wrapper";
import Logo from "../../../assets/images/LAE-Logo-PNG.png";
import firebase from "../../../firebase/firebaseConfig";
import { message } from "antd";
import { Auth } from "../../../context/stateUser";

const Index = () => {
  const history = useHistory();
  const { users } = useContext(Auth);

  //VARIABLES DEL FORMULARIO
  const initialStateValues = {
    email: "",
    pass: "",
  };

  //ESTADO DE LAS VARIABLES
  const [values, setValues] = useState(initialStateValues);

  //OBTENER VALORES DE LOS INPUTS DEL FORMULARIO
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //INGRESO AL USUARIO
  const loginUser = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.pass)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email") {
          message.error("Correo inválido", 5);
        }
        if (error.code === "auth/wrong-password") {
          message.error("Contraseña incorrecta", 5);
        }
        if (error.code === "auth/user-not-found") {
          message.error(
            "Este correo no esta registrado o ha sido eliminado",
            5
          );
        }
      });
  };

  useEffect(() => {
    if (users) {
      history.push("/");
    }
  }, [history, users]);
  return (
    <>
      <Main>
        <Wrapper>
          <div className="content">
            <ValidateImage login>
              <ImageForm image={Logo} />
              <LinkForm type="Iniciar sesión" />
            </ValidateImage>
            <ValidateForm>
              <TitleForm title="Iniciar sesión" />
              <FormRL
                type="Iniciar sesión"
                onChange={handleInputChange}
                onSubmit={loginUser}
              />
            </ValidateForm>
          </div>
        </Wrapper>
      </Main>
    </>
  );
};

export default Index;
