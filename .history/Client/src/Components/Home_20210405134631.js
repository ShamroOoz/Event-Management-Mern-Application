import React, { useState, useEffect } from "react";
import AllPosts from "./Posts/Allposts";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PostAction } from "../Actions";

const Home = () => {
  //STATE
  const [isAuth, setisAuth] = useState(false);

  //HOOKS
  const location = useLocation();
  const dispatch = useDispatch();

  //
  useEffect(() => {
    let data = localStorage.getItem("profile");
    if (data) {
      setisAuth(true);
    }
    dispatch(PostAction.getPosts());
    console.log("something is change in home");
  }, [dispatch, isAuth, location]);

  ///
  return (
    <>
      <AllPosts isAuth={isAuth} />
    </>
  );
};

export default Home;
