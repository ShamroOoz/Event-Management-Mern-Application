import React, { useState } from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";

const Home = () => {
  const [isAuth, setisAuth] = useState(false);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 py-4 px-4 ">
      {isAuth && (
        <div className=" md:hidden block mb-10">
          <CreatPost />
        </div>
      )}

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
