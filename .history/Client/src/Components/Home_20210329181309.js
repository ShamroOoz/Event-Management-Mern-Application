import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const state = useSelector((state) => state.auth);
  React.useEffect(() => {
    const rememberMe = localStorage.getItem("profile");
  }, [state]);
  return <div>Home</div>;
};

export default Home;
