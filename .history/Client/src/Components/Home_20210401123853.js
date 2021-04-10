import React from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";

const Home = () => {
  return (
    <div>
      <CreatPost />
      <AllPosts />
    </div>
  );
};

export default Home;
