import React, { useState, useEffect } from "react";
import { Spinner } from "../Helper";
import SingalPost from "./SingalPost";
import CreatPost from "../FormComp/CreatPost";
import { useSelector, useDispatch } from "react-redux";
import { PostAction } from "../../Actions";

///
const Allposts = ({ isAuth }) => {
  //allstates
  const state = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  const [updatepostId, setupdatepostId] = useState(null);
  useEffect(() => {
    dispatch(PostAction.getPosts());
    console.log("all post render");
  }, [state, updatepostId]);
  //listners
  const UpdateListner = (id) => {
    setupdatepostId(id);
  };

  //
  if (state.loading) return <Spinner />;

  //
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
        <div className="flex flex-wrap ">
          {state.postData.map((post) => (
            <SingalPost
              key={post._id}
              post={post}
              UpdateListner={UpdateListner}
            />
          ))}
        </div>
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

export default Allposts;
