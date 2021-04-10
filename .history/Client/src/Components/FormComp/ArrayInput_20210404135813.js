import React, { useState } from "react";
import { FieldArray, Field, ErrorMessage } from "formik";

const ArrayInput = ({ type, label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label>List of phone numbers</label>
      <FieldArray name="phNumbers">
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { phNumbers } = values;
          // console.log('fieldArrayProps', fieldArrayProps)
          // console.log('Form errors', form.errors)
          return (
            <div>
              {phNumbers.map((phNumber, index) => (
                <div key={index}>
                  <Field name={`phNumbers[${index}]`} />
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
