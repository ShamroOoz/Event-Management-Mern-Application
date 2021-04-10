import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./Reducers";

const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Middleware running");
    };
  };
};
const store = createStore(reducers, compose(applyMiddleware(thunk, myLogger)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
