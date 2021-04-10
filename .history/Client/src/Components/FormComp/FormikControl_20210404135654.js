import React from "react";
import Input from "./Input";
import ArrayInput from "./ArrayInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "array":
      return <ArrayInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
