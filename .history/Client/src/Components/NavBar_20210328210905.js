import React from "react";

const NavBar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white py-4 md:px-12 shadow border-solid border-t-2 border-blue-700">
      <div class="flex justify-between md:w-auto w-full md:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 md:pb-0">
        <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span class="font-semibold text-xl tracking-tight">My Navbar</span>
        </div>
        {/* toggle menu button */}
        <div class="block md:hidden ">
          <button id="nav" class="btn-toggle-menu ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-3 w-3"
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

      <div class="menu w-full md:block flex-grow md:flex md:items-center md:w-auto md:px-3 px-8">
        <div class="text-md font-bold text-blue-700 md:flex-grow  ">
          <a href="#responsive-header" class="btn-menu">
            Home
          </a>
        </div>
        {/* search */}
        <div class="relative mx-auto text-gray-600 md:block hidden">
          <input
            class="btn-search"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-3 mr-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class=" h-4 w-4 stroke-1"
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
        <div class="flex ">
          <a href="#pablo" class="btn-action">
            Sign in
          </a>
          <a href="#pablo" class="btn-action ">
            login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
