import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";
import { PlusCircleIcon } from "@heroicons/react/solid";

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

                  {index > 0 && (
                    <button
                      type="button"
                      className="absolute top-5 right-0 pr-3 flex items-center"
                    >
                      <PlusCircleIcon className="h-6 text-gray-700" />
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
