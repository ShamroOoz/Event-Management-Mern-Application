import React from "react";
import { CreatPostSchema, CreatPostValues } from "./Schema";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../../Actions";

//
const CreatPost = ({ isAuth, updatepostId, setupdatepostId }) => {
  //states
  const dispatch = useDispatch();
  let Updatepost = useSelector((state) =>
    updatepostId
      ? state.PostReducer.postData.find((post) => post._id === updatepostId)
      : null
  );

  ///form
  const onSubmit = async (values, onSubmitProps) => {
    try {
      if (!updatepostId || !Updatepost) {
        dispatch(PostAction.uploadPosts(values));
        clearListner();
        onSubmitProps.resetForm();
      } else {
        dispatch(PostAction.updatePost(updatepostId, values));
        clearListner();
        onSubmitProps.resetForm();
      }
      console.log("working");
    } catch (error) {
      console.log(error);
    }
  };

  const clearListner = () => {
    Updatepost = null;
    setupdatepostId(null);
  };
  ///

  return (
    <div className="w-full shadow-lg border border-blue-700">
      <div className="bg-white rounded-lg p-4 pb-3 max-h-screen ">
        <div className="text-blue-700 font-bold text-2xl text-center">
          {!updatepostId ? "Create " : "Update "} Memory
        </div>
        {!isAuth ? (
          <div className="text-blue-700 text-center">
            You Need to Login to create memories
          </div>
        ) : (
          <Formik
            initialValues={Updatepost || CreatPostValues}
            validationSchema={CreatPostSchema}
            onSubmit={onSubmit}
            enableReinitialize
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
                  <FormikControl control="array" name="tags" label={`#Tags`} />
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
                    {!updatepostId ? "Submit " : "Update "}
                  </button>
                  {updatepostId && (
                    <button
                      type="button"
                      className="btn-large-alert"
                      onClick={() => clearListner()}
                    >
                      Cancel
                    </button>
                  )}
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
