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
    <div className="w-full shadow-lg border border-blue-700">
      <div className="bg-white rounded-lg p-4 pb-3 max-h-screen ">
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
