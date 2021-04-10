import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import FileBase64 from "react-file-base64";
//
const Input = ({ type, label, name, ...rest }) => {
  const [show, setshow] = useState(false);

  return (
    <div className="py-2 relative">
      {(type === "text" || type === "email") && (
        <>
          <Field
            placeholder={label}
            name={name}
            type={type}
            className="input-text"
            {...rest}
          />
          <ErrorMessage component={TextError} name={name} />
        </>
      )}
      {type === "textarea" && (
        <>
          <Field
            placeholder={label}
            name={name}
            as="textarea"
            rows="8"
            cols="10"
            className="input-text"
            {...rest}
          />
          <ErrorMessage component={TextError} name={name} />
        </>
      )}

      {type === "file" && (
        <>
          <Field name={name}>
            {({ field, form, meta }) => {
              return (
                <div>
                  <FileBase64 type={type} {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </>
      )}
      {type === "password" && (
        <>
          <Field
            placeholder={label}
            name={name}
            type={show ? "text" : "password"}
            className="input-text"
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
          <ErrorMessage component={TextError} name={name} />
        </>
      )}
    </div>
  );
};

export default Input;
