import { useGoogleLogin } from "react-google-login";
const clientId =
  "1054933876327-59bng0njnvpl2m401p67qtliud32ue8c.apps.googleusercontent.com";

const GoogleLoginHook = () => {
  const onSuccess = (response) => {
    console.log("login success : currentUser:", response);
  };
  const onFailure = (response) => {
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