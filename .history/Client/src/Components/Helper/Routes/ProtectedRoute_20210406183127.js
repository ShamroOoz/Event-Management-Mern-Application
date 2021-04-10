import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../../Actions";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children, ...rest }) => {
  //
  const [isUser, setisUser] = useState(false);
  const dispatch = useDispatch();
  //
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
