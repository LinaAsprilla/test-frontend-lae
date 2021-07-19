import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 900px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0px 15px 16.83px 0.17px rgb(0 0 0 / 5%);
  border-radius: 20px;

  .content {
    padding: 75px 0;
    display: flex;
  }

  .form-title {
    line-height: 1.66;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #222;
    font-size: 36px;
    margin-bottom: 33px;
  }

  .ant-input-affix-wrapper {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    &:not(.ant-input-affix-wrapper-disabled):hover {
      border-color: #d9d9d9;
    }
  }
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
  }
  .ant-input-prefix {
    margin-right: 19px;
  }
  .ant-btn-primary {
    background: #2ba8d9;
    border-color: #2ba8d9;

    &:hover,
    &:focus {
      background: #9bdaf2;
      border-color: #9bdaf2;
    }
  }
  .ant-form-item-explain.ant-form-item-explain-error {
    font-size: 12px;
  }

  .ant-form-item-has-error :not(.ant-input-disabled).ant-input:focus,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled).ant-input-affix-wrapper:focus,
  .ant-form-item-has-error :not(.ant-input-disabled).ant-input-focused,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled).ant-input-affix-wrapper-focused {
    box-shadow: none;
  }
  figure {
    margin-bottom: 50px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  a {
    font-size: 14px;
    color: #222;
    display: block;
    text-align: center;
    text-decoration: underline;
  }
  .ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary[disabled]:active {
    color: white;
  }
`;

const ValidateForm = styled.div`
  margin-left: ${(props) => (props.signup ? "75px" : "80px")};
  margin-right: ${(props) => (props.signup ? "75px" : "90px")};
  margin-top: ${(props) => (props.signup ? "" : "60px")};
  padding-left: ${(props) => (props.signup ? "34px" : "")};
  width: 50%;
  overflow: hidden;
`;

const ValidateImage = styled.div`
  margin-top: ${(props) => (props.signup ? "45px" : "10px")};
  margin: ${(props) => (props.signup ? "0 55px" : "")};
  margin-left: ${(props) => (props.signup ? "" : "110px")};
  margin-right: ${(props) => (props.signup ? "" : "20px")};
  width: 50%;
  overflow: hidden;
`;

export default Wrapper;
export { Main, ValidateForm, ValidateImage };
