import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const state = useSelector((state) => state.AuthReducer);

  return <code>Home</code>;
};

export default Home;
