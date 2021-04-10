import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../Helper";
import { PostAction } from "../../Actions";
import SingalPost from "./SingalPost";

///
const Allposts = ({ setupdatepostId, updatepostId }) => {
  //allstates
  const { postData, loading } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  //listners
  const UpdateListner = (id) => {
    setupdatepostId(id);
  };
  const DeleteListner = (id) => {
    dispatch(PostAction.removePost(id));
  };
  const likepostListner = (id) => {
    dispatch(PostAction.likePost(id));
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
          likepostListner={likepostListner}
        />
      ))}
    </div>
  );
};

export default Allposts;
