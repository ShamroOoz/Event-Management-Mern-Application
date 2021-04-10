import React, { useState } from "react";
import Input from "./Input";

const initialState = {
  title: "",
  message: "",
  tags: "",
};

const CreatPost = ({ isAuth }) => {
  const [form, setForm] = useState(initialState);
  console.log(isAuth);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="w-full shadow-lg border border-blue-700">
      <div className="bg-white rounded-lg p-4 pb-3 max-h-screen ">
        <div className="text-blue-700 font-bold text-2xl text-center">
          Create A Memory
        </div>
        <div className="text-blue-700 text-center">
          You Need to Login to create Memories
        </div>

        {isAuth && (
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mx-auto max-w-lg">
              <Input
                type={`text`}
                name="title"
                handleChange={handleChange}
                label={`Title`}
                required
              />
              <Input
                type={`text`}
                name="message"
                handleChange={handleChange}
                label={`Message`}
                required
              />
              <Input
                type={`text`}
                name="tags"
                handleChange={handleChange}
                label={`Tags`}
                required
              />
              <button type="submit" className="btn-large">
                submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreatPost;
