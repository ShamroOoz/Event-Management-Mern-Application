import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const state = useSelector((state) => state.AuthReducer);
  return <div>Home</div>;
};

export default Home;
