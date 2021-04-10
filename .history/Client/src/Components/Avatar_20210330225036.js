import React from "react";

const Avatar = ({ logoutlisntner }) => {
  return (
    <div className=" ml-5 relative inline-block">
      <img
        className="inline-block object-cover w-12 h-12 rounded-full"
        src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile"
      />
      <span className="avatar"></span>

      <div
        className="drop-down"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <a href="#pablo" className="drop-down-list" role="menuitem">
            Account settings
          </a>
          <a href="#pablo" className="drop-down-list" role="menuitem">
            Support
          </a>
          <a href="#pablo" className="drop-down-list" role="menuitem">
            License
          </a>
          <button
            type="submit"
            onClick={logoutlisntner}
            className="w-full text-left drop-down-list"
            role="menuitem"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
