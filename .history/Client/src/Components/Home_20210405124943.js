import React, { useState, useEffect } from "react";
import AllPosts from "./Posts/Allposts";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../Actions";

const Home = () => {
  //STATE
  const [isAuth, setisAuth] = useState(false);
  const state = useSelector((state) => state.PostReducer);
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
  }, [dispatch, isAuth, location]);

  ///
  return (
    <>
      <AllPosts state={state} isAuth={isAuth} />
    </>
  );
};

export default Home;
