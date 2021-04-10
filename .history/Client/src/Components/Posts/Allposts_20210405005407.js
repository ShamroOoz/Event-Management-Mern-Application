import React from "react";
import { Spinner } from "../Helper";
import SingalPost from "./SingalPost";

///
const Allposts = ({ setupdatepostId, state }) => {
  //allstates
  const { postData, loading } = state;

  //listners
  const UpdateListner = (id) => {
    setupdatepostId(id);
  };

  //
  if (loading) return <Spinner />;

  //
  return (
    <div className="flex flex-wrap ">
      {postData.map((post) => (
        <SingalPost key={post._id} post={post} UpdateListner={UpdateListner} />
      ))}
    </div>
  );
};

export default Allposts;
