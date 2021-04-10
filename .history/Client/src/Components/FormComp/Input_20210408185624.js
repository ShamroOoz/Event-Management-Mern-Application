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
              console.log(form);
              return (
                <>
                  <FileBase64
                    type={type}
                    {...field}
                    onDone={(event) => {
                      form.setFieldValue("avatar", event);
                    }}
                  />

                  <ErrorMessage component={TextError} name={name} />
                </>
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

          <div className="absolute right-0 top-5 pr-3 flex items-center ">
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
