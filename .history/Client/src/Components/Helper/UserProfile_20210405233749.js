import React from "react";
import SingalPost from "../Posts/SingalPost";
import { useSelector } from "react-redux";
import Spinner from "../Helper/Spinner";

const UserProfile = () => {
  const { authData, loading } = useSelector((state) => state.AuthReducer);
  console.log(authData?.user?.createdposts);
  if (loading) return <Spinner />;
  return (
    <div className="space-y-8">
      <div className="h-64 w-full bg-white mt-3">
        <div className="flex flex-col justify-center items-center h-full text-blue-700">
          {authData?.user?.avatar ? (
            <img
              src={authData?.user?.avatar}
              className="inline-block object-cover w-12 h-12 rounded-full"
              alt=""
            />
          ) : (
            <span className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold bg-blue-600">
              {authData?.user?.name.charAt(0)}
            </span>
          )}
          <h1 className="text-2xl font-semibold">{authData.user.name}</h1>
          <h4 className="text-sm font-semibold">{authData.user.email}</h4>
        </div>
      </div>
      {/* <div className="flex flex-wrap ">
        {postData.map((post) => (
          <SingalPost
            key={post._id}
            post={post}
            UpdateListner={UpdateListner}
          />
        ))}
      </div> */}
    </div>
  );
};

export default UserProfile;
