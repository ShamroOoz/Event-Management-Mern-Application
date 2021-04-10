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
        <div className="text-blue-700 font-bold text-2xl text-center">
          Create A Memory
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mx-auto max-w-lg">
            <Input
              type={`text`}
              name="name"
              handleChange={handleChange}
              label={`Title`}
              required
            />
            <Input
              type={`textarea`}
              name="name"
              handleChange={handleChange}
              label={`Message`}
              rows="4"
              cols="50"
              required
            />
            <Input
              type={`text`}
              name="name"
              handleChange={handleChange}
              label={`Tags`}
              required
            />
            <button type="submit" className="btn-large">
              {isSignup ? "SingUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatPost;
