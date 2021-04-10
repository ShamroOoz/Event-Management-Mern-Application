import React from "react";
import { useGoogleLogin } from "react-google-login";
const clientId =
  "1054933876327-59bng0njnvpl2m401p67qtliud32ue8c.apps.googleusercontent.com";

const LoginHook = () => {
  const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    clientId,
    cookiePolicy: "single_host_origin",
    onFailure,
    accessType: "offline",
    prompt,
  });
  return { onSuccess, onFailure };
};

export default LoginHook;
