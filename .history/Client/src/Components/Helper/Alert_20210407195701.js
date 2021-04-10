import React, { useState } from "react";
import { BellIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { AUTH } from "../../Constants/actionTypes";
import { useDispatch } from "react-redux";
const Alert = ({ errors }) => {
  const [showAlert, setShowAlert] = useState(true);
  const dispatch = useDispatch();
  const dismissAlert = () => {
    dispatch({ type: AUTH, data: null, loading: false, error: null });
    setShowAlert(false);
  };
  return (
    <>
      {showAlert ? (
        <div
          className={`text-white px-6 py-4 mt-4 border-0 rounded relative mb-4 ${
            errors.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span className="text-xl inline-block mr-5 align-middle">
            {errors.success ? (
              <EmojiHappyIcon className="h-5 w-5" />
            ) : (
              <BellIcon className="h-5 w-5" />
            )}
          </span>
          {errors.error.map((err, index) => (
            <span key={index} className="inline-block align-middle mr-8">
              {err}
            </span>
          ))}
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => dismissAlert()}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
