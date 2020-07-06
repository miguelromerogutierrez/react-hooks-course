import React, { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(0);
  let handleClick = () => setCounter(counter + 1);
  return (
    <div className="App">
      <p data-testid="counter">{counter}</p>
      <button data-testid="button" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}
