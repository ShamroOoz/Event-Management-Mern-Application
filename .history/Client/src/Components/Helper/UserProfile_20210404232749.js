import React from "react";
import AllPosts from "../Posts/Allposts";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const state = useSelector((state) => state.AuthReducer);
  console.log(state);
  return (
    <div className="space-y-8">
      <div className="h-64 w-full bg-white mt-3">
        <div className="flex flex-col justify-center items-center h-full text-blue-700">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="h-24 w-24 object-cover rounded-full"
            alt=""
          />
          <h1 className="text-2xl font-semibold">Antonia Howell</h1>
          <h4 className="text-sm font-semibold">Joined Since '19</h4>
        </div>
      </div>
      <AllPosts />
    </div>
  );
};

export default UserProfile;
