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
    const data = await api.updatePost(id, post);
    console.log(data);
    // if (!data.status) {
    //   throw new Error("Something went wrong");
    // }
    // dispatch({ type: actionType.UPDATEPOST, payload: data.post });
  } catch (error) {
    console.log(error);
    dispatch({ type: actionType.DONEPOSTS, payload: error });
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.REQPOSTS });
    const { data } = await api.likePost(id);
    if (!data.status) {
      throw new Error("Something went wrong");
    }
    dispatch({ type: actionType.LIKEPOST, payload: data.post });
  } catch (error) {
    console.log(error);
    dispatch({ type: actionType.DONEPOSTS, payload: error });
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.REQPOSTS });
    const { status } = await api.deletePost(id);
    if (!status) {
      throw new Error("Something went wrong");
    }
    dispatch({ type: actionType.DELETEPOST, payload: id });
  } catch (error) {
    console.log(error);
    dispatch({ type: actionType.DONEPOSTS, payload: error });
  }
};
