import React, { useState } from "react";
import { CreatPostSchema, CreatPostValues } from "./Schema";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";

export const MockValues = {
  title: "Woman standing under blue sky",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!",
  tags: "something",
};
const CreatPost = ({ isAuth }) => {
  const [LoadData, setLoadData] = useState(MockValues);
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.resetForm();
  };
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
            initialValues={LoadData || CreatPostValues}
            validationSchema={CreatPostSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form className="mt-6">
                <div className="mx-auto max-w-lg">
                  <FormikControl
                    control="input"
                    type={`text`}
                    name="title"
                    label={`Title`}
                  />
                  <FormikControl
                    control="input"
                    type={`textarea`}
                    name="message"
                    label={`Message`}
                  />
                  <FormikControl
                    control="input"
                    type={`text`}
                    name="tags"
                    label={`Tags`}
                  />
                  <button
                    type="submit"
                    className="btn-large"
                    disabled={!formik.isValid}
                  >
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
