import React from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <AllPosts className="col-span-2 block" />

      <CreatPost className="block" />
    </div>
  );
};

export default Home;
