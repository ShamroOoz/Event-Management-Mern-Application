import React, { useState } from "react";
import Input from "./Input";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CreatPost = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="block md:flex ">
      <div className="w-full md:w-1/2 md:mx-2 mb-4 shadow-lg">
        <div className="bg-white "></div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mx-auto max-w-lg">
            <Input
              type={`text`}
              name="name"
              handleChange={handleChange}
              label={`Creator`}
              required
            />
            <Input
              type={`text`}
              name="name"
              handleChange={handleChange}
              label={`Creator`}
              required
            />
            <Input
              type={`text`}
              name="name"
              handleChange={handleChange}
              label={`Creator`}
              required
            />
            <Input
              type={`text`}
              name="name"
              handleChange={handleChange}
              label={`Creator`}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatPost;
