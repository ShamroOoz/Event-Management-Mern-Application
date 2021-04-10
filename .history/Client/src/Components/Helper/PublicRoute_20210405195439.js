import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../Actions";
import { useDispatch } from "react-redux";

const PublicRoute = ({ children, ...rest }) => {
  const [isUser, setisUser] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem("profile");
    if (user) {
      dispatch(AuthAction.getLoginuser());
      setisUser(false);
    } else {
      setisUser(true);
    }
  }, [dispatch]);
  return (
    <Route {...rest}>
      {() => {
        //return isUser ?  <Redirect to="/" /> : children ;
        return isUser ? children : <Redirect to="/" />;
      }}
    </Route>
  );
};
export default PublicRoute;
