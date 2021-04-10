import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FireIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { LOGOUT } from "../Constants/actionTypes";
import { PostAction } from "../Actions";
import { useDispatch } from "react-redux";
import Avatar from "./Helper/Avatar";
import decode from "jwt-decode";

const NavBar = () => {
  const [togglemenu, settogglemenu] = useState(false);
  const [isAuth, setisAuth] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const logoutlisntner = useCallback(() => {
    try {
      dispatch({ type: LOGOUT });
      setisAuth(null);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(PostAction.getPosts());
    let data = localStorage.getItem("profile");
    if (data) {
      const decodedToken = decode(
        JSON.parse(localStorage.getItem("profile")).token
      );
      if (decodedToken.exp * 1000 < new Date().getTime()) logoutlisntner();
      setisAuth(decodedToken);
    }
  }, [location, dispatch, logoutlisntner]);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white py-2 md:px-10 shadow-md border-solid border-t-2 border-blue-700">
        <div className={`flex justify-between w-full p-3 md:w-auto `}>
          <Link
            to="/"
            className="flex items-center flex-shrink-0 text-blue-700 mr-8"
          >
            <FireIcon className="h-9 w-5" />
            <span className="font-semibold text-2xl subpixel-antialiased tracking-tight">
              My Mems
            </span>
          </Link>
          {/* toggle menu button */}
          <div className="block md:hidden ">
            <button
              id="nav"
              className="btn-toggle-menu"
              onClick={() => settogglemenu((prevtogglemenu) => !prevtogglemenu)}
            >
              <MenuIcon className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto md:px-2  ${
            togglemenu ? "block" : "hidden"
          }`}
        >
          <div className="text-md font-bold text-blue-700 md:flex-grow  ">
            <Link to="/" className="btn-menu">
              Home
            </Link>
            {isAuth && (
              <Link to="/profile" className="btn-menu">
                Profile
              </Link>
            )}
            <Link to="/djdjdjj" className="btn-menu">
              About
            </Link>
          </div>
          {/* search */}
          <div className="relative mx-auto text-gray-600 md:block hidden">
            <input
              className="btn-search"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-3 mr-2 focus:outline-none"
            >
              <SearchIcon className=" h-4 w-4 stroke-1" />
            </button>
          </div>
          {/* Button */}
          <div className="flex justify-center items-center">
            {isAuth ? (
              <div>
                <span className="hidden md:block">
                  <Avatar logoutlisntner={logoutlisntner} />
                </span>
                <span className="md:hidden">
                  <button
                    type="button"
                    className="btn-action inline-block"
                    onClick={logoutlisntner}
                  >
                    Log Out
                  </button>
                </span>
              </div>
            ) : (
              <>
                <Link to="/singup" className="btn-action">
                  Sign Up
                </Link>
                <Link to="/login" className="btn-action ">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
