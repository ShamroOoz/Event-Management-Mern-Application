import * as actionType from "../Constants/actionTypes";
const PostReducer = (
  state = { postData: [], loading: false, errors: null },
  action
) => {
  switch (action.type) {
    case actionType.REQPOSTS:
      return { ...state, loading: true };
    case actionType.DONEPOSTS:
      return { ...state, loading: false, errors: action.payload };
    case actionType.FETCH_ALL:
      return {
        ...state,
        postData: action.payload,
        loading: false,
      };
    case actionType.CREATPOST:
      return {
        ...state,
        postData: [...state.postData, action.payload.post],
        loading: false,
      };
    case actionType.UPDATEPOST:
      return {
        ...state,
        postData: state.postData.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        loading: false,
      };
    case actionType.LIKEPOST:
      console.log(action.payload);
    // return {
    //   ...state,
    //   postData: state.postData.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   ),
    //   loading: false,
    // };

    case actionType.DELETEPOST:
      return {
        ...state,
        postData: state.postData.filter((post) => post._id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
};

export default PostReducer;
