import React, { useState } from "react";
import { Input } from "..";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../Actions";

const initialState = {
  name: "",
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
          label={`Email`}
          required
        />
        {isSignup && (
          <Input
            type={`text`}
            name="name"
            handleChange={handleChange}
            label={`Name`}
            required
          />
        )}
        <Input
          type={`password`}
          name="password"
          handleChange={handleChange}
          label={`Password`}
          required
        />
        {isSignup && (
          <Input
            type={`password`}
            name="confirmPassword"
            label={`Confirm Password`}
            handleChange={handleChange}
            required
          />
        )}
        <button type="submit" className="btn-large">
          {isSignup ? "SingUp" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default EnteryForm;
