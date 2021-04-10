import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Avatar = ({ logoutlisntner, avatar }) => {
  //
  const [togglemenu, settogglemenu] = useState(false);
  const { user } = useSelector((state) => state.AuthReducer);
  console.log("In avatar section", Authstate);
  return (
    <div className=" ml-5 relative md:inline-block ">
      <div
        onClick={() => settogglemenu((prevtogglemenu) => !prevtogglemenu)}
        onMouseEnter={() => settogglemenu(true)}
      >
        {avatar ? (
          <img
            className="inline-block object-cover w-12 h-12 rounded-full"
            src={avatar}
            alt="Profile"
          />
        ) : (
          <span className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold bg-blue-600">
            C
          </span>
        )}
      </div>

      {togglemenu && (
        <div
          className="drop-down z-10"
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
