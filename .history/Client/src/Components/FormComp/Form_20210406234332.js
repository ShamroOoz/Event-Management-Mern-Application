import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, Redirect, useRouteMatch } from "react-router-dom";
import EnteryForm from "./EnteryForm";
import GoogleLoginHook from "../../Hooks/GoogleLoginHook";
import { useSelector } from "react-redux";
import { Spinner, Alert } from "../Helper";
import {
  SingupSchema,
  SignInSchema,
  ForgetSchema,
  ResetSchema,
} from "./Schema";

//
const Form = () => {
  //
  const [moduleId, setismoduleId] = useState();
  const [schema, setschema] = useState(SignInSchema);
  //
  const location = useLocation();

  if (useRouteMatch("/login")) {
    console.log("to check the match");
  }

  const { signIn } = GoogleLoginHook();
  const state = useSelector((state) => state.AuthReducer);
  //

  const RouteChecking = () => {
    switch (location?.pathname) {
      case useRouteMatch("/singup"):
        setismoduleId("singup");
        return setschema(SingupSchema);
      case "/login":
        setismoduleId("login");
        return setschema(SignInSchema);
      case "/forgot-password":
        setismoduleId("forgot");
        return setschema(ForgetSchema);
      case "/password-reset":
        setismoduleId("reset");
        return setschema(ResetSchema);
      default:
        return <Redirect to="/login" />;
    }
  };

  useEffect(() => RouteChecking(), [state]);
  //
  if (state.loading) return <Spinner />;

  //
  return (
    <div className="container max-w-full mx-auto  px-6">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="mt-4">
              <div className="text-center font-bold text-3xl text-blue-700">
                {moduleId === "singup" && "Create Account"}
                {moduleId === "login" && "Welcome"}
                {(moduleId === "forgot" || moduleId === "reset") && (
                  <>
                    <span>Reset your password</span>
                    {moduleId === "forgot" ? (
                      <p className="text-sm font-light py-3 text-gray-400">
                        To reset your password, enter the email address you use
                        to sign in.
                      </p>
                    ) : (
                      <p className="text-sm font-light py-3 text-gray-400">
                        Enter your new password. After confirming, you will be
                        asked to log in again.
                      </p>
                    )}
                  </>
                )}
              </div>
              {state.errors && <Alert errors={state.errors} />}
              <EnteryForm moduleId={moduleId} schema={schema} />
              {moduleId === "login" && (
                <div className="text-center mt-4 text-gray-400 hover:text-gray-600">
                  Don’t have an account yet?
                  <Link to="/singup">
                    <span className="underline"> Sign up</span>
                  </Link>
                </div>
              )}
              {moduleId === "singup" && (
                <div className="text-center mt-4 text-gray-400 hover:text-gray-600">
                  Already have an account?
                  <Link to="/login">
                    <span className="underline"> Log in</span>
                  </Link>
                </div>
              )}
              {(moduleId === "forgot" || moduleId === "reset") && (
                <div className="text-center mt-4 text-gray-400 hover:text-gray-600">
                  Never mind! Take me back to
                  <Link to="/login">
                    <span className="underline"> Login</span>
                  </Link>
                </div>
              )}
            </div>

            {(moduleId === "singup" || moduleId === "login") && (
              <div className="flex flex-col space-y-4 mt-3">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-600 w-14"></span>
                  <span className="font-normal text-gray-600">or</span>
                  <span className="h-px bg-gray-600 w-14"></span>
                </span>
                <button className="btn-social" onClick={signIn}>
                  <span>
                    <svg
                      className="text-blue-500 group-hover:text-white h-3 w-3"
                      viewBox="0 0 256 262"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                    >
                      <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                      />
                      <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                      />
                      <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                      />
                      <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                    Google
                  </span>
                </button>
                <button className="btn-social">
                  <span>
                    <svg
                      className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                    Github
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
