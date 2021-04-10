import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";

const ArrayInput = ({ type, label, name, ...rest }) => {
  return (
    <div className="py-2 relative">
      <label>List of phone numbers</label>
      <FieldArray name={name} className="input-text">
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { tags } = values;
          // console.log('fieldArrayProps', fieldArrayProps)
          // console.log('Form errors', form.errors)
          return (
            <div>
              {tags.map((phNumber, index) => (
                <div key={index}>
                  <Field name={`tags[${index}]`} />
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
