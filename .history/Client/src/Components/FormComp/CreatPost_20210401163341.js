import React from "react";
import Input from "./Input";

const CreatPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="block md:flex ">
      <div className="w-full md:w-1/2 md:mx-2 mb-4 shadow-lg">
        <div className="bg-white rounded-lg p-4 pb-3 max-h-screen "></div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mx-auto max-w-lg">
            <Input
              type={`text`}
              name="name"
              handleChange={handleChange}
              label={`Name`}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatPost;
