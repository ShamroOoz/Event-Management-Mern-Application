import React, { useState, useEffect } from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isAuth, setisAuth] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let data = localStorage.getItem("profile");
    if (data) {
      setisAuth(true);
      console.log(isAuth);
    }
  }, [isAuth, location]);
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
      {isAuth && (
        <div className=" hidden md:block mb-10 ">
          <CreatPost />
        </div>
      )}
    </div>
  );
};

export default Home;
