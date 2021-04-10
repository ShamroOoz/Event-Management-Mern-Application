import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import { AuthAction } from "../../Actions";
import { useDispatch } from "react-redux";

const PublicRoute = ({ children, path, ...rest }) => {
  const [isUser, setisUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(path);
            let user = localStorage.getItem("profile");
           

            if (user) {
     const decodedToken = decode(
                JSON.parse(localStorage.getItem("profile")).token
              );
              if (decodedToken.exp * 1000 < new Date().getTime()) {
                localStorage.removeItem("profile");
                setisUser(true);
              } else {
                dispatch(AuthAction.getLoginuser());
                setisUser(false);
              }
} else if (path === "/profile") {
    setisUser(false);
} else {
     setisUser(true);
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
