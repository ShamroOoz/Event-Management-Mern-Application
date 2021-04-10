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

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <a
            href="#pablo"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Account settings
          </a>
          <a
            href="#pablo"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Support
          </a>
          <a
            href="#pablo"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            License
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
