import React from "react";
import AllPosts from "./Posts/Allposts";

const UserProfile = () => {
  return (
    <div className="space-y-8">
      <div class="h-64 w-full bg-white mt-3">
        <div class="flex flex-col justify-center items-center h-full text-blue-700">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            class="h-24 w-24 object-cover rounded-full"
            alt=""
          />
          <h1 class="text-2xl font-semibold">Antonia Howell</h1>
          <h4 class="text-sm font-semibold">Joined Since '19</h4>
        </div>
      </div>
      <AllPosts />
    </div>
  );
};

export default UserProfile;
