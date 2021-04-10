import React, { useEffect, useState } from "react";
const Input = ({ type, label }) => {
  const [show, setshow] = useState(false);
  return (
    <div className="py-2">
      <input
        placeholder={`Enter ${label}`}
        type={type}
        className="input-text"
      />
    </div>
  );
};

export default Input;
