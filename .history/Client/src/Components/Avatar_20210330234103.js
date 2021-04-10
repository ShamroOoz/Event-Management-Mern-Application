import React, { useState } from "react";
import { Link } from "react-router-dom";

const Avatar = ({ logoutlisntner }) => {
  const [togglemenu, settogglemenu] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className=" ml-5 relative inline-block">
      <div
        onClick={() => settogglemenu((prevtogglemenu) => !prevtogglemenu)}
        onMouseEnter={() => settogglemenu(true)}
      >
        {/* <img
          className="inline-block object-cover w-12 h-12 rounded-full"
          src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile"
        /> */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md bg-blue-700">
          Circle
        </div>
      </div>

      {togglemenu && (
        <div
          className="drop-down"
          role="menu"
          onMouseLeave={() => settogglemenu(false)}
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link to="/" className="drop-down-list" role="menuitem">
              <span className="">Signed in as:</span>
              <p className="mt-1 font-bold">Shamroz Warraich</p>
            </Link>
            <Link to="/pablo" className="drop-down-list" role="menuitem">
              Account settings
            </Link>
            <Link to="/pablo" className="drop-down-list" role="menuitem">
              Support
            </Link>
            <Link to="/pablo" className="drop-down-list" role="menuitem">
              License
            </Link>
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
