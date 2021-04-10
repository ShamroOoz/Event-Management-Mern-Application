import {
  FETCH_ALL,
  REQPOSTS,
  DELETEPOST,
  CREATPOST,
} from "../Constants/actionTypes";
import * as api from "../Hooks/ApiHook";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: REQPOSTS });
    const { data } = await api.fetchPosts();
    console.log(data);
    if (data) {
      dispatch({ type: FETCH_ALL, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const uploadPosts = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REQPOSTS });
    const { data } = await api.createPost(formData);
    console.log(data);
    if (data) {
      dispatch({ type: CREATPOST, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: REQPOSTS });
    await api.deletePost(id);
    dispatch({ type: DELETEPOST, payload: id });
  } catch (error) {
    console.log(error);
  }
};
