import React, { useState, useEffect } from "react";
import CreatPost from "./FormComp/CreatPost";
import AllPosts from "./Posts/Allposts";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../Actions";

const Home = () => {
  //STATE
  const [isAuth, setisAuth] = useState(false);
  const [updatepostId, setupdatepostId] = useState(null);
  //HOOKS
  const location = useLocation();
  const dispatch = useDispatch();
  const Poststate = useSelector((state) => state.PostReducer);
  const Authstate = useSelector((state) => state.AuthReducer);

  //
  useEffect(() => {
    console.log(Authstate);
    let data = localStorage.getItem("profile");
    if (data) {
      setisAuth(true);
    }
    dispatch(PostAction.getPosts());
  }, [dispatch, isAuth, location, updatepostId, Authstate]);

  ///
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 py-4 px-4 ">
      <div className=" md:hidden block mb-10">
        <CreatPost
          isAuth={isAuth}
          updatepostId={updatepostId}
          setupdatepostId={setupdatepostId}
        />
      </div>

      <div className="col-span-2 ">
        <AllPosts setupdatepostId={setupdatepostId} state={Poststate} />
      </div>

      <div className=" hidden md:block mb-10 ">
        <CreatPost
          isAuth={isAuth}
          updatepostId={updatepostId}
          setupdatepostId={setupdatepostId}
        />
      </div>
    </div>
  );
};

export default Home;