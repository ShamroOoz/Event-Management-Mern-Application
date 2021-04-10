import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";

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
                  {tag}
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
