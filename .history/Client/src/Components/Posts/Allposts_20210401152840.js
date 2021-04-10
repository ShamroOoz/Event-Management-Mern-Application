import React from "react";

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
          <div class="p-4 h-auto  pb-3">
            <a
              href="#pable"
              class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
            >
              Woman standing under blue sky
            </a>
            <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              quidem blanditiis unde asperiores? Officia amet perspiciatis ad
              quibusdam incidunt eaque, nobis, eveniet neque porro id commodi
              quisquam debitis!
            </div>

            <div class="mt-3">
              <span class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">
                #something
              </span>
            </div>

            <div class="flex items-center">
              <div>
                <img
                  class="w-12 h-12 object-cover rounded-full mx-4 shadow"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  alt="avatar"
                />
              </div>
              <h2 class="text-sm tracking-tighter text-gray-900">
                <a href="#ssdd">By Mohammed Ibrahim</a>{" "}
                <span class="text-gray-600">21 SEP 2015.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* secondd */}

      <div class="w-full md:w-1/2 md:mx-2 mb-4 md:mb-0">
        <div class="bg-white rounded-lg overflow-hidden shadow relative">
          <img
            class="h-56 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
            alt=""
          />
          <div class="p-4 h-auto md:h-40 lg:h-48">
            <a
              href="#pable"
              class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
            >
              Woman standing under blue sky
            </a>
            <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              quidem blanditiis unde asperiores? Officia amet perspiciatis ad
              quibusdam incidunt eaque, nobis, eveniet neque porro id commodi
              quisquam debitis!
            </div>
            <div class="relative mt-2 lg:absolute bottom-0 mb-4 ">
              <a
                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                #something
              </a>
              <a
                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                #sky
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allposts;
