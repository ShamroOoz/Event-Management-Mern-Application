import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../Actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const EnteryForm = ({ isSignup }) => {
  // const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (isSignup) {
  //     console.log(form);
  //     dispatch(AuthAction.signup(form, history));
  //     setForm(initialState);
  //     e.target.reset();
  //   } else {
  //     console.log(form);
  //     dispatch(AuthAction.signin(form, history));
  //     setForm(initialState);
  //     e.target.reset();
  //   }
  // };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="mt-6">
          <div className="mx-auto max-w-lg">
            <FormikControl
              control="input"
              type={`email`}
              name="email"
              label={`Email`}
            />
            {isSignup && (
              <FormikControl
                control="input"
                type={`text`}
                name="name"
                label={`Name`}
              />
            )}
            <FormikControl
              control="input"
              type={`password`}
              name="password"
              label={`Password`}
            />
            {isSignup && (
              <FormikControl
                control="input"
                type={`password`}
                name="confirmPassword"
                label={`Confirm Password`}
              />
            )}
            <button
              type="submit"
              className="btn-large"
              disabled={!formik.isValid}
            >
              {isSignup ? "SingUp" : "Login"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteryForm;
