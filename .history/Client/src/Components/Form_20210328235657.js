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
            <div className="mt-2">
              <div className="text-center font-bold text-3xl text-blue-700">
                {singUp ? "Welcome" : "Welcome Back"}
              </div>

              <form className="mt-8">
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
              <div className="text-center mt-4">
                Don’t have an account yet? <Link to="/singup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
