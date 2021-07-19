import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background: #f8f8f8;
  font-family: 'Poppins', sans-serif;
}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
