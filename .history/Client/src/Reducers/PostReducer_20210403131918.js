import * as actionType from "../Constants/actionTypes";
const PostReducer = (
  state = { postData: null, loading: false, errors: null },
  action
) => {
  switch (action.type) {
    case actionType.AUTH:
      return {
        ...state,
        postData: action.data,
        loading: action.loading,
        errors: action.error,
      };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default PostReducer;
