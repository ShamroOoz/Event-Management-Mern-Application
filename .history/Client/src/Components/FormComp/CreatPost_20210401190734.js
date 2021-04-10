import React from "react";

import * as Yup from "yup";
import FormikControl from "./FormikControl";

const initialValues = {
  title: "",
  message: "",
  tags: "",
};
const validationSchema = Yup.object({
  email: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
});

const onSubmit = (values) => {
  console.log("Form data", values);
};

const CreatPost = ({ isAuth }) => {
  return (
    <div className="w-full shadow-lg border border-blue-700">
      <div className="bg-white rounded-lg p-4 pb-3 max-h-screen ">
        <div className="text-blue-700 font-bold text-2xl text-center">
          Create A Memory
        </div>
        {!isAuth ? (
          <div className="text-blue-700 text-center">
            You Need to Login to create memories
          </div>
        ) : (
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mx-auto max-w-lg">
              <Input
                type={`text`}
                name="title"
                handleChange={handleChange}
                label={`Title`}
                required
              />
              <Input
                type={`text`}
                name="message"
                handleChange={handleChange}
                label={`Message`}
                required
              />
              <Input
                type={`text`}
                name="tags"
                handleChange={handleChange}
                label={`Tags`}
                required
              />
              <button type="submit" className="btn-large">
                submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreatPost;
