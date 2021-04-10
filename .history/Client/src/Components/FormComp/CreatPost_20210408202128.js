import React, { useState, useEffect } from "react";
import { CreatPostSchema, CreatPostValues } from "./Schema";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../../Actions";

//
const CreatPost = ({ updatepostId, setupdatepostId }) => {
  //states
  const [postData, setPostData] = useState(CreatPostValues);

  //Hooks
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.AuthReducer);
  const Updatepost = useSelector((state) =>
    updatepostId
      ? state.PostReducer.postData.find((post) => post._id === updatepostId)
      : null
  );
  //
  useEffect(() => {
    if (Updatepost) setPostData(Updatepost);
  }, [Updatepost]);
  //
  const onSubmit = async (values, onSubmitProps, event) => {
    console.log(values);
    console.log(event);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();

    // try {
    //   if (!updatepostId || !Updatepost) {
    //     dispatch(
    //       PostAction.uploadPosts({ ...values, avatar: values.avatar.base64 })
    //     );
    //     clearListner();
    //   } else {
    //     dispatch(
    //       PostAction.updatePost(updatepostId, {
    //         ...values,
    //         avatar: values.avatar.base64,
    //       })
    //     );
    //     clearListner();
    //   }
    //   onSubmitProps.setSubmitting(false);
    //   onSubmitProps.resetForm();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const clearListner = () => {
    setPostData(null);
    setupdatepostId(null);
  };
  ///

  return (
    <div className="w-full shadow-lg border border-blue-700">
      <div className="bg-white rounded-lg p-4 pb-3 max-h-screen ">
        <div className="text-blue-700 font-bold text-2xl text-center">
          {!updatepostId ? "Create " : "Update "} Memory
        </div>
        {!authData ? (
          <div className="text-blue-700 text-center">
            You Need to Login to create memories
          </div>
        ) : (
          <Formik
            initialValues={postData || CreatPostValues}
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
