import React from "react";
import { Input } from ".";

const EnteryForm = ({ isSignup }) => {
  return (
    <form className="mt-6">
      <div className="mx-auto max-w-lg">
        <Input type={`text`} label={`Username`}></Input>
        {isSignup && <Input type={`email`} label={`email`}></Input>}
        <Input type={`password`} label={`Password`}></Input>
        {isSignup && (
          <Input type={`password`} label={`Re-type Password`}></Input>
        )}
        <button type="submit" className="btn-large">
          {isSignup ? "SingUp" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default EnteryForm;
