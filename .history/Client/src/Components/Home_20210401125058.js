import React from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 space-y-7">
      <div>
        <AllPosts />
      </div>
      <div>
        <CreatPost />
      </div>
    </div>
  );
};

export default Home;
