import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  React.useEffect(() => {
    const rememberMe = localStorage.getItem("profile");
    const state = useSelector((state) => state.state);
    console.log(rememberMe);
  }, []);
  return <div>Home</div>;
};

export default Home;
