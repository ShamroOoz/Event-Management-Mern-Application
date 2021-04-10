import React, { useState } from "react";
import { CreatPostSchema, CreatPostValues } from "./Schema";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";

const CreatPost = ({ isAuth }) => {
  const [img, setimg] = useState(initialState);
  const onSubmit = async (values, onSubmitProps) => {
    try {
      console.log("Form data", { ...values, avatar: values.avatar.base64 });
      // onSubmitProps.resetForm();
    } catch (error) {
      console.log(error);
    }
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
            initialValues={CreatPostValues}
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
                  <FormikControl
                    control="input"
                    type={`file`}
                    multiple={false}
                    name="avatar"
                  />

                  <button
                    type="submit"
                    className="btn-large"
                    disabled={!formik.isValid}
                  >
                    submit
                  </button>
                  <img src={img} alt="dddddd" />
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
