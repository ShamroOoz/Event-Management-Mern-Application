import React from "react";

const Home = () => {
  React.useEffect(() => {
    const rememberMe = localStorage.getItem("profile");
    console.log(rememberMe);
  }, []);
  return <div>Home</div>;
};

export default Home;
