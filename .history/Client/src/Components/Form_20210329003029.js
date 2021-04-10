import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Input } from ".";

const Form = () => {
  const [singUp, setsingUp] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setsingUp(pathname === "/singup" ? true : false);
  }, [pathname]);
  return (
    <div className="container max-w-full mx-auto  px-6">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="mt-4">
              <div className="text-center font-bold text-3xl text-blue-700">
                {singUp ? "Create Account" : "Welcome"}
              </div>

              <form className="mt-6">
                <div className="mx-auto max-w-lg">
                  <Input type={`text`} label={`Username`}></Input>
                  {singUp && <Input type={`email`} label={`email`}></Input>}
                  <Input type={`password`} label={`Password`}></Input>
                  {singUp && (
                    <Input type={`password`} label={`Re-type Password`}></Input>
                  )}
                  <button className="btn-large">
                    {singUp ? "SingUp" : "Login"}
                  </button>
                </div>
              </form>
              {!singUp && (
                <div className="text-center mt-4">
                  Don’t have an account yet?
                  <Link to="/singup">
                    <span className="underline"> Sign up</span>
                  </Link>
                </div>
              )}
              {singUp && (
                <div className="text-center mt-4">
                  Already have an account?
                  <Link to="/login">
                    <span className="underline"> Log in</span>
                  </Link>
                </div>
              )}
            </div>
            <div class="flex flex-col space-y-4">
              <button class="btn-social">
                <span>
                  <svg
                    class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
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
                <span class="text-sm font-medium text-gray-800 group-hover:text-white">
                  Github
                </span>
              </button>
              <button class="btn-social">
                <span>
                  <svg class="w-5 h-5 text-gray-800 fill-current group-hover:text-white">
                    <path d="M23.4 46.9c-12.5 0-23-10.2-23-22.7s10.5-22.7 23-22.7c6.9 0 11.9 2.7 15.6 6.3l-4.4 4.4c-2.7-2.5-6.3-4.4-11.2-4.4C14.2 7.7 7.1 15 7.1 24.2c0 9.1 7.1 16.5 16.3 16.5 5.9 0 9.3-2.4 11.5-4.5 1.8-1.8 2.9-4.3 3.4-7.8H23.5v-6.2h20.7c.2 1.1.3 2.4.3 3.9 0 4.7-1.3 10.4-5.4 14.5-3.9 4.1-9 6.3-15.7 6.3zm52.7-14.6c0 8.4-6.6 14.6-14.7 14.6s-14.7-6.2-14.7-14.6c0-8.5 6.6-14.6 14.7-14.6 8.1-.1 14.7 6.1 14.7 14.6zm-6.4 0c0-5.3-3.8-8.9-8.3-8.9-4.4 0-8.3 3.6-8.3 8.9 0 5.2 3.8 8.9 8.3 8.9 4.5-.1 8.3-3.7 8.3-8.9zm38.3 0c0 8.4-6.6 14.6-14.7 14.6s-14.7-6.2-14.7-14.6c0-8.5 6.6-14.6 14.7-14.6 8.1-.1 14.7 6.1 14.7 14.6zm-6.5 0c0-5.3-3.8-8.9-8.3-8.9-4.4 0-8.3 3.6-8.3 8.9 0 5.2 3.8 8.9 8.3 8.9 4.5-.1 8.3-3.7 8.3-8.9zm37-13.8v26.3c0 10.8-6.4 15.2-13.9 15.2-7.1 0-11.4-4.8-13-8.6l5.6-2.3c1 2.4 3.4 5.2 7.4 5.2 4.8 0 7.8-3 7.8-8.6v-2.1h-.2c-1.4 1.8-4.2 3.3-7.7 3.3-7.3 0-14-6.4-14-14.6 0-8.3 6.7-14.7 14-14.7 3.5 0 6.3 1.6 7.7 3.3h.2v-2.4h6.1zm-5.7 13.8c0-5.2-3.4-8.9-7.8-8.9s-8.1 3.8-8.1 8.9c0 5.1 3.7 8.8 8.1 8.8 4.4 0 7.8-3.7 7.8-8.8zm16-29.2V46h-6.2V3.1h6.2zm24.9 34l5 3.3c-1.6 2.4-5.5 6.5-12.2 6.5-8.3 0-14.5-6.4-14.5-14.6 0-8.7 6.3-14.6 13.8-14.6 7.6 0 11.3 6 12.5 9.3l.7 1.7-19.6 8.1c1.5 2.9 3.8 4.4 7.1 4.4s5.5-1.7 7.2-4.1zm-15.3-5.3l13.1-5.4c-.7-1.8-2.9-3.1-5.4-3.1-3.4 0-7.9 2.9-7.7 8.5z" />
                    <path fill="none" d="M0 1h180v59.5H0z" />
                  </svg>
                </span>
                <span class="text-sm font-medium text-blue-500 group-hover:text-white">
                  Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
