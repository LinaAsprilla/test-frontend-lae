import React from "react";
import FormRL, { ImageForm, LinkForm, TitleForm } from "../../../components/Form/index";
import Wrapper, {
  Main,
  ValidateForm,
  ValidateImage,
} from "../../../components/Form/Wrapper";
import Logo from "../../../assets/images/LAE-Logo-PNG.png";

const index = () => {
  return (
    <Main>
      <Wrapper>
        <div className="content">
          <ValidateImage login>
            <ImageForm image={Logo} />
            <LinkForm type="Iniciar sesión"/>
          </ValidateImage>
          <ValidateForm>
            <TitleForm title="Iniciar sesión" />
            <FormRL type="Iniciar sesión" />
          </ValidateForm>
        </div>
      </Wrapper>
    </Main>
  );
};

export default index;
