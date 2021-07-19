import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Register from "./container/Form/RegisterForm/";
import Login from "./container/Form/LoginForm";
import Home from "./container/Markup";
import { AuthContext } from "./context/stateUser";

const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </React.Fragment>
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
