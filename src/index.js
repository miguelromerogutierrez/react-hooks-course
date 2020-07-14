import React from "react";
import ReactDOM from "react-dom";

// import { Counter, States, Form, PrintArrays } from "./App.solution";
import { Counter, States, Form, PrintArrays } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div>
      <h3>Counter</h3>
      <Counter />
    </div>
    <div>
      <h3>States</h3>
      <States />
    </div>
    <div>
      <h3>Form</h3>
      <Form />
    </div>
    <div>
      <h3>Print Array</h3>
      <PrintArrays />
    </div>
  </React.StrictMode>,
  rootElement
);
