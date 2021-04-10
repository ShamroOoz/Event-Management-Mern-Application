import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const state = useSelector((state) => state.AuthReducer);

  return <code>Home {state.authData}</code>;
};

export default Home;
