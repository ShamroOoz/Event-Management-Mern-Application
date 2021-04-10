import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../Actions";
import { Formik, Form } from "formik";
import { SingupSchema, SignInSchema, initialValues } from "./Schema";
import FormikControl from "./FormikControl";

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const EnteryForm = ({ isSignup }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [schema, setschema] = useState(SignInSchema);
  useEffect(() => {
    setschema(isSignup ? SingupSchema : SignInSchema);
    return () => {
      setschema(null);
    };
  }, [schema, isSignup, location]);
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
    <Formik initialValues={value} validationSchema={schema} onSubmit={onSubmit}>
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
