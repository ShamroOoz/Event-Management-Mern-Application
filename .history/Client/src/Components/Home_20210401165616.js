import React from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";

const Home = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 py-4 px-4 ">
      <div className=" md:hidden block">
        <CreatPost />
      </div>
      <div className="col-span-2 ">
        <AllPosts />
      </div>
      <div className="hidden md:block">
        <CreatPost />
      </div>
    </div>
  );
};

export default Home;
