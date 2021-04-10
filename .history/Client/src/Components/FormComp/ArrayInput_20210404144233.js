import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/solid";

const ArrayInput = ({ type, label, name, ...rest }) => {
  return (
    <div className="py-2 relative">
      <FieldArray name={name}>
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { tags } = values;
          return (
            <div>
              {tags.map((tag, index) => (
                <div key={index}>
                  <Field
                    name={`tags[${index}]`}
                    className="input-text"
                    placeholder={label}
                  />

                  <div className="my-4 relative">
                    <span className="inline  bg-gray-300 py-1 px-3 rounded-full text-xs lowercase text-gray-700">
                      {tags[index]}
                    </span>
                    <div className="absolute top-0 right-0">
                      <XCircleIcon className="h-3 text-gray-700 " />
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => remove()}>
                -
              </button>
              <button
                type="button"
                className="absolute top-5 right-0 pr-3 flex items-center"
                onClick={() => push("")}
              >
                <PlusCircleIcon className="h-6 text-gray-700" />
              </button>
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default ArrayInput;
