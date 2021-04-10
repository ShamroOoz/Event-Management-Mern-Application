import React, { useState } from "react";
import { Input } from ".";

const Form = () => {
  const [singUp, setsingUp] = useState(false);

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
                  <button className="bg-large">
                    {singUp ? "SingUp" : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
