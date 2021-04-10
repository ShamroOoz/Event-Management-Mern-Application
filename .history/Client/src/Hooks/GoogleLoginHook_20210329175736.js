import { useGoogleLogin } from "react-google-login";
import AuthAction from "../Actions/AuthAction";
const clientId =
  "1054933876327-59bng0njnvpl2m401p67qtliud32ue8c.apps.googleusercontent.com";

const GoogleLoginHook = () => {
  const onSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      AuthAction().googlesignin({ data: { result, token } });
    } catch (error) {
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
