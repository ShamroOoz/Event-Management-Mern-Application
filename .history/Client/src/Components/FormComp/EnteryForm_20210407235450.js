import React from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../Actions";
import { Formik, Form } from "formik";
import { initialValues } from "./Schema";
import FormikControl from "./FormikControl";

const EnteryForm = ({ moduleId, schema }) => {
  //Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useParams();
  //Listner
  const forgetListner = () => {
    history.push("/forgot-password");
  };

  //mainsubmit action
  const onSubmit = (values, onSubmitProps) => {
    if (moduleId === "singup") {
      dispatch(AuthAction.signup(values, history));
    } else if (moduleId === "login") {
      dispatch(AuthAction.signin(values, history));
    } else if (moduleId === "forgot") {
      dispatch(AuthAction.forgotPaassword(values));
    } else {
      console.log("reset Password logic", token);
      //dispatch(AuthAction.resetPassword(token ,values));
    }
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema || initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="mt-4">
          <div className="mx-auto max-w-lg">
            {moduleId !== "reset" && (
              <FormikControl
                control="input"
                type={`email`}
                name="email"
                label={`Email`}
              />
            )}
            {moduleId === "singup" && (
              <FormikControl
                control="input"
                type={`text`}
                name="name"
                label={`Name`}
              />
            )}
            {moduleId !== "forgot" && (
              <FormikControl
                control="input"
                type={`password`}
                name="password"
                label={`Password`}
              />
            )}
            {(moduleId === "singup" || moduleId === "reset") && (
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
                onClick={forgetListner}
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
              {moduleId === "forgot" && "Get Reset Link"}
              {moduleId === "reset" && "Reset Password"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteryForm;
