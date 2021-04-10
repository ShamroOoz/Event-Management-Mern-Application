import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../Actions";
import { Formik, Form } from "formik";
import { SingupSchema, SignInSchema, initialValues } from "./Schema";
import FormikControl from "./FormikControl";

const EnteryForm = ({ isSignup, moduleId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [schema, setschema] = useState(SignInSchema);
  useEffect(() => {
    setschema(isSignup ? SingupSchema : SignInSchema);
  }, [schema, isSignup, history]);

  const onSubmit = (values, onSubmitProps) => {
    if (isSignup) {
      dispatch(AuthAction.signup(values, history));
    } else {
      dispatch(AuthAction.signin(values, history));
    }
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
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
            {moduleId === "singup" && (
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
            {moduleId === "singup" && (
              <FormikControl
                control="input"
                type={`password`}
                name="confirmPassword"
                label={`Confirm Password`}
              />
            )}
            {moduleId === "login" && (
              <div
                type="button"
                className="underline flex justify-end text-sm cursor-pointer hover:text-gray-700 text-gray-400"
              >
                Forgot your password?
              </div>
            )}
            <button
              type="submit"
              className="btn-large"
              disabled={!formik.isValid}
            >
              {moduleId === "singup" && "Singup"}
              {moduleId === "login" && "Login"}
              {moduleId === "forget" && "Reset password"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteryForm;
