import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../../Actions";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children, ...rest }) => {
  //
  const [isUser, setisUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const decodedToken = decode(
      JSON.parse(localStorage.getItem("profile")).token
    );
    if (decodedToken.exp && decodedToken.exp * 1000 < new Date().getTime()) {
      localStorage.clear();
      setisUser(false);
    } else {
      dispatch(AuthAction.getLoginuser());
      console.log("ddd");
      setisUser(true);
    }
  }, [dispatch]);
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
