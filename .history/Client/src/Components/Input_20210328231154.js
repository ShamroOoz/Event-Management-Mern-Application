import React from "react";

const Input = ({ type, label }) => {
  return (
    <div className="py-2">
      <span className="px-1 text-sm text-gray-700">{label}</span>
      <input placeholder="" type={type} className="input-text" />
    </div>
  );
};

export default Input;
