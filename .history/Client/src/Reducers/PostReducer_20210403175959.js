import * as actionType from "../Constants/actionTypes";
const PostReducer = (
  state = { postData: [], loading: false, errors: null },
  action
) => {
  switch (action.type) {
    case actionType.FETCH_ALL:
      return { ...state, loading: true };
    case actionType.FETCH_ALL:
      return {
        ...state,
        postData: action.data,
        loading: action.loading,
        errors: action.error,
      };

    default:
      return state;
  }
};

export default PostReducer;
