import React, { useState, useEffect } from "react";
import AllPosts from "./Posts/Allposts";
import { useLocation } from "react-router-dom";

const Home = () => {
  //STATE
  const [isAuth, setisAuth] = useState(false);
  //HOOKS
  const location = useLocation();

  //
  useEffect(() => {
    let data = localStorage.getItem("profile");
    if (data) {
      setisAuth(true);
    }

    console.log("something is change in home");
  }, [isAuth, location]);

  ///
  return (
    <>
      <AllPosts isAuth={isAuth} />
    </>
  );
};

export default Home;
