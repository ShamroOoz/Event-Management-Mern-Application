import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../Helper";
import { PostAction } from "../../Actions";
import { useDispatch } from "react-redux";
import SingalPost from "./SingalPost";

///
const Allposts = () => {
  const state = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(state);
  }, [state]);

  const UpdateListner = (id) => {
    console.log(id);
    console.log("Update Listner");
  };
  const DeleteListner = (id) => {
    console.log(id);
    dispatch(PostAction.removePost(id));
  };
  if (state.loading) return <Spinner />;
  return (
    <div className="flex flex-wrap ">
      {state.postData.map((post) => (
        <SingalPost
          key={post._id}
          post={post}
          DeleteListner={DeleteListner}
          UpdateListner={UpdateListner}
        />
      ))}
    </div>
  );
};

export default Allposts;
