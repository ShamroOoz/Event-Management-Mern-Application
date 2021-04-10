import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

const PublicRoute = ({ children, ...rest }) => {
  const [isUser, setisUser] = useState(true);

  useEffect(() => {
    let user = localStorage.getItem("profile");
    if (user) {
      const decodedToken = decode(
        JSON.parse(localStorage.getItem("profile")).token
      );

      if (!decodedToken.exp * 1000 < new Date().getTime()) {
      } else {
        setisUser(true);
      }
    }
  }, []);
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
