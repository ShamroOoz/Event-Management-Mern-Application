import React from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <AllPosts />
      </div>
      <div>
        <CreatPost />
      </div>
    </div>
  );
};

export default Home;
