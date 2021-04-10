import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../../Actions";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children, path, ...rest }) => {
  const [isUser, setisUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(path);
    let data = localStorage.getItem("profile");
    if (data) {
      const decodedToken = decode(
        JSON.parse(localStorage.getItem("profile")).token
      );
      if (decodedToken.exp && decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
        setisUser(false);
      } else {
        dispatch(AuthAction.getLoginuser());
        setisUser(true);
      }
    } else {
      setisUser(false);
    }
  }, [dispatch, path]);
  return (
    <Route {...rest}>
      {() => {
        return isUser ? children : <Redirect to="/login" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
