import React from "react";
import SingalPost from "../Posts/SingalPost";
import { useSelector } from "react-redux";
import Spinner from "../Helper/Spinner";

const UserProfile = () => {
  const {
    authData: { user },
    loading,
  } = useSelector((state) => state.AuthReducer);
  console.log(user?.createdposts);
  if (loading) return <Spinner />;
  return (
    <div className="space-y-8">
      <div className="h-64 w-full bg-white mt-3">
        <div className="flex flex-col justify-center items-center h-full text-blue-700">
          {user?.avatar ? (
            <img
              src={user?.avatar}
              className="inline-block object-cover w-12 h-12 rounded-full"
              alt=""
            />
          ) : (
            <span className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold bg-blue-600">
              {user?.name.charAt(0)}
            </span>
          )}
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <h4 className="text-sm font-semibold">{user.email}</h4>
        </div>
      </div>
      {/* <div className="flex flex-wrap ">
        {user?.createdposts.map((post) => (
          <SingalPost key={post._id} post={post} />
        ))}
      </div> */}
    </div>
  );
};

export default UserProfile;
