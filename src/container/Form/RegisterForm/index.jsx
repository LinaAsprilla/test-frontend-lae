import React, { useState, useEffect } from "react";
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

const Index = () => {
  const history = useHistory();

  //BASE DE DATOS USUARIOS
  const db = firebase.firestore().collection("users");

  //VARIABLES DEL FORMULARIO
  const initialStateValues = {
    email: "",
    pass: "",
    username: "",
  };

  //ESTADO DE LAS VARIABLES
  const [values, setValues] = useState(initialStateValues);

  //VALIDAR ERROR EN LOS INPUTS
  const [inputError, setInputError] = useState(false);

  //OBTENER VALORES DE LOS INPUTS DEL FORMULARIO
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  //VALIDAR SI HAY ERRORES EN LOS INPUTS
  const onFinishFailed = () => {
    setInputError(true);
  };

  //REGISTRAR USUARIO
  const onSubmit = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.pass)
      .then(() => {
        message.success(` ${values.username}, se ha registrado con éxito`, 5);
        history.push("/login");
        db.doc(values.email).set({
          username: values.username,
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setTimeout(() => {
            message.error("Este correo ya se encuentra registrado", 5);
          }, 5);
        } else {
          return null;
        }
      });
  };

  return (
    <Main>
      <Wrapper>
        <div className="content">
          <ValidateForm signup>
            <TitleForm title="Registrarme" />
            <FormRL
              type="register"
              onChange={handleInputChange}
              onSubmit={onSubmit}
              onFinishFailed={onFinishFailed}
            />
          </ValidateForm>
          <ValidateImage signup>
            <ImageForm image={Logo} />
            <LinkForm type="register" />
          </ValidateImage>
        </div>
      </Wrapper>
    </Main>
  );
};

export default Index;
