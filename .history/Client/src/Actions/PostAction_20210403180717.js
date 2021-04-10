import { FETCH_ALL, REQPOSTS } from "../Constants/actionTypes";
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

export const removePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    console.log(data);
    // if (data) {
    //   dispatch({ type: FETCH_ALL, data: data, error: [], loading: false });
    // }
  } catch (error) {
    console.log(error);
  }
};
