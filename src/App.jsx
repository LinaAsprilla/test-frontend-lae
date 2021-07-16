import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Register from "./container/Form/RegisterForm/";
import Login from "./container/Form/LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
