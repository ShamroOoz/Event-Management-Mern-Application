import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { LOGOUT } from "../Constants/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";

const NavBar = () => {
  const [togglemenu, settogglemenu] = useState(false);
  const [isAuth, setisAuth] = useState(false);
  const state = useSelector((state) => state.AuthReducer);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    let data = localStorage.getItem("profile");
    if (data) {
      setisAuth(true);
    }
  }, [state, location, isAuth]);

  const logoutlisntner = () => {
    try {
      dispatch({ type: LOGOUT });
      history.push("/");
      setisAuth(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 md:px-12 shadow-md border-solid border-t-2 border-blue-700">
        <div
          className={`flex justify-between w-full border-b-2 border-solid border-gray-300 pl-6 pr-2 pb-5 md:w-auto md:pb-0 `}
        >
          <Link
            to="/"
            className="flex items-center flex-shrink-0 text-blue-700 mr-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-9 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto md:px-3  ${
            togglemenu ? "block" : "hidden"
          }`}
        >
          <div className="text-md font-bold text-blue-700 md:flex-grow  ">
            <Link to="/" className="btn-menu">
              Home
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className=" h-4 w-4 stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* Button */}
          <div className="flex justify-center items-center">
            {isAuth ? (
              <Avatar logoutlisntner={logoutlisntner} />
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
