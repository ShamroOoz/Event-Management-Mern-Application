import React, { useEffect, useState } from "react";
const Input = ({ type, label }) => {
  const [show, setshow] = useState(false);
  return (
    <div className="py-2">
      <span className="px-1 text-sm text-gray-700">{label}</span>
      <input placeholder={label} type={type} className="input-text" />
    </div>
  );
};

export default Input;
