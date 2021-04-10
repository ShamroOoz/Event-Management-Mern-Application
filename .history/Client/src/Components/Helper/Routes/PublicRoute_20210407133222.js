import React, { useEffect, useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../../Actions";
import { useDispatch } from "react-redux";

const PublicRoute = ({ children, ...rest }) => {
  const [isUser, setisUser] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log(locationlocation);
    let data = localStorage.getItem("profile");
    if (data) {
      const decodedToken = decode(
        JSON.parse(localStorage.getItem("profile")).token
      );
      if (decodedToken.exp && decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
        setisUser(true);
      } else {
        dispatch(AuthAction.getLoginuser());
        setisUser(false);
      }
    }
  }, [dispatch]);
  return (
    <Route {...rest}>
      {() => {
        return isUser ? children : <Redirect to="/" />;
      }}
    </Route>
  );
};
export default PublicRoute;
