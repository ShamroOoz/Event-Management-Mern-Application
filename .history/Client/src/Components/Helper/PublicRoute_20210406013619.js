import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../Actions";
import { useDispatch } from "react-redux";

const PublicRoute = ({ children, path, ...rest }) => {
  const [isUser, setisUser] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(path);
    let token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decode(localStorage.getItem("token"));
      if (decodedToken && decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("profile");
        setisUser(true);
      } else {
        dispatch(AuthAction.getLoginuser());
        setisUser(false);
      }
    }
  }, [dispatch, path]);
  return (
    <Route {...rest}>
      {() => {
        return isUser ? children : <Redirect to="/" />;
      }}
    </Route>
  );
};
export default PublicRoute;
