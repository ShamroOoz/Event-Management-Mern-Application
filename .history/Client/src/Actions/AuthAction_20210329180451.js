import { useHistory } from "react-router-dom";
import { AUTH } from "../Constants/actionTypes";
import { useDispatch } from "react-redux";

const AuthAction = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const googlesignin = (data = {}) => {
    try {
      console.log("ddddd");
      //dispatch({ type: AUTH, data });
      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    googlesignin,
  };
};

export default AuthAction;
