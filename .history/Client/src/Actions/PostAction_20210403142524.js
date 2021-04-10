import { FETCH_ALL } from "../Constants/actionTypes";
import * as api from "../Hooks/ApiHook";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL, data: [], loading: true, error: null });
    const { data } = await api.fetchPosts();
    console.log(data);
    if (data) {
      dispatch({ type: FETCH_ALL, data: data, error: null, loading: false });
    }
  } catch (error) {
    console.log(error);
  }
};
