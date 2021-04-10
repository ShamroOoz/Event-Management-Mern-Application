import * as actionType from "../Constants/actionTypes";
const PostReducer = (
  state = { postData: [], loading: false, errors: null },
  action
) => {
  switch (action.type) {
    case actionType.REQPOSTS:
      return { ...state, loading: true };
    case actionType.FETCH_ALL:
      return {
        ...state,
        postData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default PostReducer;
