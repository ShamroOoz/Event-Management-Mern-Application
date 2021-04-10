import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../Helper";
import { PostAction } from "../../Actions";
import { useDispatch } from "react-redux";
import SingalPost from "./SingalPost";

///
const Allposts = ({ setupdatepostId, updatepostId }) => {
  //allstates
  const { postData, loading } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  // useEffect(() => {}, [state]);
  ///  console.log(state);
  //listners
  const UpdateListner = (id) => {
    setupdatepostId(id);
  };
  const DeleteListner = (id) => {
    dispatch(PostAction.removePost(id));
  };
  //
  if (loading) return <Spinner />;

  //
  return (
    <div className="flex flex-wrap ">
      {postData.map((post) => (
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
