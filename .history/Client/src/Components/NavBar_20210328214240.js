import React, { useState } from "react";

const NavBar = () => {
  const [togglemenu, settogglemenu] = useState(false);
  console.log(togglemenu);
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white py-4 md:px-12 shadow-md border-solid border-t-2 border-blue-700">
      <div
        class={`flex justify-between md:w-auto w-full border-solid  border-gray-300 pl-6 pr-2 pb-5 md:pb-0 ${
          togglemenu ? " border-b-2" : " border-b-0"
        }`}
      >
        <div class="flex items-center flex-shrink-0 text-blue-700 mr-10">
          <span class="font-semibold text-2xl tracking-tight">My Mems</span>
        </div>
        {/* toggle menu button */}
        <div class="block md:hidden ">
          <button
            id="nav"
            class="btn-toggle-menu"
            onClick={() => settogglemenu((prevtogglemenu) => !prevtogglemenu)}
          >
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

      <div
        className={`menu w-full md:block flex-grow md:flex md:items-center md:w-auto md:px-3 px-8 ${
          togglemenu ? "block" : "hidden"
        }`}
      >
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
