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
              <Field name={`tags`} className="input-text" placeholder={label} />
              {tags.map((tag, index) => (
                <div key={index}>
                  <p name={`tags[${index}]`}>tags ></p>

                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      -
                    </button>
                  )}
                </div>
              ))}
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
