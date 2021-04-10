import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

const PublicRoute = ({ children, ...rest }) => {
  const [isUser, setisUser] = useState(true);
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
