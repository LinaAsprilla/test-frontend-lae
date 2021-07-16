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
          <ValidateForm signup>
            <TitleForm title="Registrarme" />
            <FormRL type="register" />
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

export default index;
