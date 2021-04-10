import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";

const initialValues = {
  title: "",
  message: "",
  tags: "",
};
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  tags: Yup.string().required("Required"),
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
                    as={`text`}
                    name="title"
                    label={`Title`}
                  />
                  <FormikControl
                    control="input"
                    as={`text`}
                    name="message"
                    label={`Message`}
                  />
                  <FormikControl
                    control="input"
                    as={`text`}
                    name="tags"
                    label={`Tags`}
                  />
                  <button type="submit" className="btn-large">
                    submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default CreatPost;
