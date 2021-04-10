import React, { useState } from "react";
import { Input } from ".";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const EnteryForm = ({ isSignup }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      //dispatch(signup(form, history));
    } else {
      // dispatch(signin(form, history));
    }
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="mx-auto max-w-lg">
        <Input
          type={`text`}
          name="username"
          handleChange={handleChange}
          autoFocuslabel={`Username`}
        ></Input>
        {isSignup && (
          <Input
            type={`email`}
            name="email"
            handleChange={handleChange}
            label={`email`}
          ></Input>
        )}
        <Input
          type={`password`}
          name="password"
          handleChange={handleChange}
          label={`Password`}
        ></Input>
        {isSignup && (
          <Input
            type={`password`}
            name="confirmPassword"
            label={`Re-type Password`}
          ></Input>
        )}
        <button type="submit" className="btn-large">
          {isSignup ? "SingUp" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default EnteryForm;
