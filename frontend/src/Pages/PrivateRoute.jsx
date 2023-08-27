import React, { useContext } from "react";
import { auth } from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(auth);
  const location = useLocation();
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to={"/login"}  />;
  }
  return children;
};


// state={location.pathname} replace