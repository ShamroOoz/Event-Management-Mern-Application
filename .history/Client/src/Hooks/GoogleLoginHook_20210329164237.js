import { useGoogleLogin } from "react-google-login";
const clientId =
  "1054933876327-59bng0njnvpl2m401p67qtliud32ue8c.apps.googleusercontent.com";

const GoogleLoginHook = () => {
  const onSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log("login success : currentUser:", result, token);
  };
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
