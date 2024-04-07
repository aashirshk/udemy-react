import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error("Expected value to be defined but received " + value);
  }
}

const entryPoint: HTMLElement | null = document.getElementById("root");

assertIsDefined(entryPoint);

ReactDOM.createRoot(entryPoint).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
