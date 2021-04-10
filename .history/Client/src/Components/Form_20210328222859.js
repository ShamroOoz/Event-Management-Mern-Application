import React from "react";

const Form = () => {
  const [show, setshow] = React.useState(false);
  return (
    <div class="container max-w-full mx-auto py-24 px-6">
      <div class="relative flex flex-wrap">
        <div class="w-full relative">
          <div class="mt-6">
            <div class="text-center font-semibold text-black">
              Lorem ipsum dolor, sit amet?
            </div>

            <form class="mt-8">
              <div class="mx-auto max-w-lg">
                <div class="py-2">
                  <span class="px-1 text-sm text-gray-600">Username</span>
                  <input
                    placeholder=""
                    type="text"
                    class="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
