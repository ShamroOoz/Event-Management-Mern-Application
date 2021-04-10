import React from "react";
import {
  TrashIcon,
  DotsHorizontalIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
const Allposts = () => {
  return (
    <div class="block md:flex ">
      <div class="w-full md:w-1/2 md:mx-2 mb-4 shadow-lg">
        <div class="bg-white rounded-lg ">
          <img
            class="h-56 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
            alt=""
          />
          <div class="p-4 pb-3 max-h-screen">
            <a
              href="#pable"
              class="block text-blue-700 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
            >
              Woman standing under blue sky
            </a>
            <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              quidem blanditiis unde asperiores? Officia amet perspiciatis ad
              quibusdam incidunt eaque, nobis, eveniet neque porro id commodi
              quisquam debitis!
            </div>

            <div class="my-4">
              <span class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">
                #something
              </span>
            </div>

            <div class="flex items-center">
              <div>
                <img
                  class="w-12 h-12 object-cover rounded-full shadow-xl"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  alt="avatar"
                />
              </div>
              <div class="ml-3">
                <p class="text-sm tracking-tighter text-black">
                  By Mohammed Ibrahim
                </p>
                <p class="text-gray-400">21 SEP 2015.</p>
              </div>
            </div>
          </div>
          <div class="flex items-center border-t-2 border-green-700 m-2 justify-between">
            <button class="btn-post">
              <span class="mr-2">
                <ThumbUpIcon className="h-5 w-5"> 0</ThumbUpIcon>
              </span>
            </button>
            <button class="btn-post">
              <span class="mr-2">
                <TrashIcon className="h-5 w-5" />
              </span>
            </button>
            <button class="btn-post">
              <span class="mr-2">
                <DotsHorizontalIcon className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* secondd */}
    </div>
  );
};

export default Allposts;
