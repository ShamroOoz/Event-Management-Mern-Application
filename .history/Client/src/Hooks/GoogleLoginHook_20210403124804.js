import { useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { AUTH } from "../Constants/actionTypes";
import { useDispatch } from "react-redux";
//import * as api from "../Hooks/ApiHook";
const clientId =
  "1054933876327-59bng0njnvpl2m401p67qtliud32ue8c.apps.googleusercontent.com";

const GoogleLoginHook = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSuccess = async (res) => {
    dispatch({ type: AUTH, data: null, loading: true, error: null });
    const result = res?.profileObj;
    const token = res?.tokenId;
    const data = { result, token };
    try {
      dispatch({ type: AUTH, data: data, error: null, loading: false });
      localStorage.setItem("profile", JSON.stringify(data));
      history.push("/");
    } catch (error) {
      dispatch({
        type: AUTH,
        data: null,
        loading: false,
        error: error.message,
      });
      console.log(error);
    }
  };

  //error meesage
  const onFailure = async (response) => {
    console.log("login success : currentUser:", response);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    cookiePolicy: "single_host_origin",
    onFailure,
    accessType: "offline",
  });
  return { onSuccess, onFailure, signIn };
};

export default GoogleLoginHook;
