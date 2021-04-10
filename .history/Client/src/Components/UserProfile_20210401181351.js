import React from "react";
import AllPosts from "./Posts/Allposts";

const UserProfile = () => {
  return (
    <div>
      <div class="">
        <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            class="bg w-full h-full object-cover object-center absolute z-0"
          />
          <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              class="h-24 w-24 object-cover rounded-full"
              alt=""
            />
            <h1 class="text-2xl font-semibold">Antonia Howell</h1>
            <h4 class="text-sm font-semibold">Joined Since '19</h4>
          </div>
        </div>
      </div>
      <AllPosts />
    </div>
  );
};

export default UserProfile;
