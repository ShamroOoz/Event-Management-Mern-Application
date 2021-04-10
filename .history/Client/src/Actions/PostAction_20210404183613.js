import * as actionType from "../Constants/actionTypes";
import * as api from "../Hooks/ApiHook";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.REQPOSTS });
    const { data } = await api.fetchPosts();
    if (data) {
      dispatch({ type: actionType.FETCH_ALL, payload: data });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: actionType.DONEPOSTS, payload: error });
  }
};

export const uploadPosts = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionType.REQPOSTS });
    const { data } = await api.createPost(formData);
    if (data) {
      dispatch({ type: actionType.CREATPOST, payload: data });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: actionType.DONEPOSTS, payload: error });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: actionType.REQPOSTS });
    const { data } = await api.updatePost(id, post);
    dispatch({ type: actionType.UPDATEPOST, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: actionType.DONEPOSTS, payload: error });
  }
};

export const removePost = (id) => async (dispatch) => {
  console.log(id);
  // try {
  //   dispatch({ type: actionType.REQPOSTS });
  //   await api.deletePost(id);
  //   dispatch({ type: actionType.DELETEPOST, payload: id });
  // } catch (error) {
  //   console.log(error);
  //   dispatch({ type: actionType.DONEPOSTS, payload: error });
  // }
};
