import React, { useEffect, useState } from "react";
import firebase from "../firebase/firebaseConfig";
import Loading from "../components/Loading/index";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [users, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <Loading />;
  } else {
    return (
      <Auth.Provider
        value={{
          users,
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};
