import React from "react";
import { CreatPostSchema, CreatPostValues } from "./Schema";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../../Actions";

const mockPostValues = {
  title: "ddd",
  message: "ddd",
  tags: "ddd",
  avatar: "ddd",
};
//
const CreatPost = ({ isAuth, updatepostId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.PostReducer.postData);
  const onSubmit = async (values, onSubmitProps) => {
    try {
      if (!updatepostId) {
        dispatch(
          PostAction.uploadPosts({ ...values, avatar: values.avatar.base64 })
        );
      } else {
        console.log("is ka kuch karna ha", post);
      }

      onSubmitProps.resetForm();
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
            initialValues={post || CreatPostValues}
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
