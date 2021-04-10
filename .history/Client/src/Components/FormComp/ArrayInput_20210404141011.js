import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { EyeIcon } from "@heroicons/react/solid";

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
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <EyeIcon className="h-6 text-gray-700" />
                  </div>

                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      -
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => push("")}>
                +
              </button>
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default ArrayInput;
