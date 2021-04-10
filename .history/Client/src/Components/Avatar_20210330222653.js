import React from "react";

const Avatar = () => {
  return (
    <div className=" ml-5 relative inline-block">
      <img
        className="inline-block object-cover w-12 h-12 rounded-full"
        src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile"
      />
      <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
    </div>
  );
};

export default Avatar;
