import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const state = useSelector((state) => state.AuthReducer);
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return <div>Home</div>;
};

export default Home;
