import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import TextError from "./TextError";

const ArrayInput = ({ type, label, name, ...rest }) => {
  const [inc, setinc] = useState(0);
  const clearListner = () => {};
  return (
    <div className="py-2 relative">
      <FieldArray name={name}>
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { tags } = values;
          return (
            <div>
              <Field
                name={`tags[${inc}]`}
                className="input-text"
                placeholder={label}
              />
              <button
                type="button"
                className="absolute top-5 right-0 pr-3 flex items-center"
                onClick={() => {
                  push();
                  setinc((previnc) => previnc + 1);
                }}
              >
                <PlusCircleIcon className="h-6 text-gray-700" />
              </button>
              <ErrorMessage component={TextError} name={name} />
              <ul>
                {tags.map((tag, index) => (
                  <li key={index} className="inline">
                    {inc > 0 && (
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
              </ul>
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default ArrayInput;
