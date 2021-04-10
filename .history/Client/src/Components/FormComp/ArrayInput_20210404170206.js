import React, { useState, useRef } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import TextError from "./TextError";

const ArrayInput = ({ type, label, name, ...rest }) => {
  const [inc, setinc] = useState(0);
  const inputEl = useRef(null);

  return (
    <div className="py-2 relative">
      <FieldArray name={name}>
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { tags } = values;
          console.log(tags);
          return (
            <div>
              <Field name={`tags[${inc}]`}>
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <input
                        className="input-text"
                        placeholder={label}
                        {...field}
                        ref={inputEl}
                      />
                    </div>
                  );
                }}
              </Field>
              <button
                type="button"
                className="absolute top-5 right-0 pr-3 flex items-center"
                onClick={() => {
                  setinc((previnc) => previnc + 1);
                  push("");
                }}
              >
                <PlusCircleIcon className="h-6 text-gray-700" />
              </button>
              <ErrorMessage component={TextError} name={name} />
              {tags.map((tag, index = inc) => (
                <li key={index} className="inline">
                  {tags.length > 0 && (
                    <button
                      className="my-4 "
                      type="button"
                      onClick={() => {
                        remove();
                        setinc((previnc) => previnc - 1);
                      }}
                    >
                      <span className="inline relative bg-gray-300 py-2 px-4 rounded-full text-xs lowercase text-gray-700">
                        {tags[index]}
                        <div className="absolute top-0 right-0">
                          <XCircleIcon className="h-4 text-gray-700 " />
                        </div>
                      </span>
                    </button>
                  )}
                </li>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default ArrayInput;
