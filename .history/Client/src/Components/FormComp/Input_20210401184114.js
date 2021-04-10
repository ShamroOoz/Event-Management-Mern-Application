import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
//
const Input = ({ type, label, name, handleChange, ...rest }) => {
  const [show, setshow] = useState(false);

  return (
    <div className="py-2 relative">
      {type !== "password" && (
        <Field
          placeholder={label}
          name={name}
          type={type}
          className="input-text"
          onChange={handleChange}
          {...rest}
        />
      )}

      {type === "password" && (
        <>
          <Field
            placeholder={label}
            name={name}
            type={show ? "text" : "password"}
            className="input-text"
            onChange={handleChange}
            {...rest}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <EyeIcon
              className={`h-6 text-gray-700 ${show ? "hidden" : "block"}`}
              onClick={() => setshow((prevshow) => !prevshow)}
            />
            <EyeOffIcon
              className={`h-6 text-gray-700 ${show ? "block" : "hidden"}`}
              onClick={() => setshow((prevshow) => !prevshow)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Input;
