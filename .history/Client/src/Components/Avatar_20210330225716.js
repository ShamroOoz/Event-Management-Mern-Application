import React, { useState } from "react";

const Avatar = ({ logoutlisntner }) => {
  const [togglemenu, settogglemenu] = useState(false);
  return (
    <div className=" ml-5 relative inline-block">
      <div onClick={settogglemenu((prevtogglemenu) => !prevtogglemenu)}>
        <img
          className="inline-block object-cover w-12 h-12 rounded-full"
          src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile"
        />
        <span className="avatar"></span>
      </div>
    </div>
  );
};

export default Avatar;
