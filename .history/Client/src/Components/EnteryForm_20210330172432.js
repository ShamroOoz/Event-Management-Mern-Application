import React, { useState } from "react";
import { Input } from ".";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { AuthAction } from "../Actions";
const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const EnteryForm = ({ isSignup }) => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      console.log(form);
      dispatch(AuthAction.signup(form, history));
      setForm(initialState);
      e.target.reset();
    } else {
      console.log(form);
      dispatch(AuthAction.signin(form, history));
      setForm(initialState);
      e.target.reset();
    }
  };
  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="mx-auto max-w-lg">
        <Input
          type={`email`}
          name="email"
          handleChange={handleChange}
          autoFocus
          label={`email`}
        />
        {isSignup && (
          <Input
            type={`text`}
            name="username"
            handleChange={handleChange}
            label={`Username`}
          />
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
            label={`Confirm Password`}
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
