import React, { useState } from "react";

const Avatar = ({ logoutlisntner }) => {
  const [togglemenu, settogglemenu] = useState(false);
  return (
    <div className=" ml-5 relative inline-block">
      <div onClick={() => settogglemenu((prevtogglemenu) => !prevtogglemenu)}>
        <img
          className="inline-block object-cover w-12 h-12 rounded-full"
          src=""
          alt="Profile"
        />
      </div>

      {togglemenu && (
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
      )}
    </div>
  );
};

export default Avatar;
