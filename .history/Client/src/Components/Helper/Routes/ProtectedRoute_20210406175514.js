import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../../Actions";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children, ...rest }) => {
  //
  const [isUser, setisUser] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let data = localStorage.getItem("profile");
    if (data) {
      // dispatch(AuthAction.getLoginuser());
      const decodedToken = decode(
        JSON.parse(localStorage.getItem("profile")).token
      );
      if (decodedToken.exp && decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
        return setisUser(false);
      }
    }
    setisUser(false);
  }, [isUser]);
  //
  return (
    <Route {...rest}>
      {() => {
        return isUser ? children : <Redirect to="/login" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
