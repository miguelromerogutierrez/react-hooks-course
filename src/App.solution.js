import React from "react";

export function Counter() {
  let [counter, setCounter] = React.useState(0);
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


export function States() {
  let [loading, setLoading] = React.useState(false);
  let handleClick = () => {
    setLoading(true);
  };

  return (
    <button data-testid="button" onClick={handleClick}>
      { loading ? 'Loading...' : 'Click Me' }
    </button>
  );
};

export function Form() {
  let [nameForm, setNameForm] = React.useState('');
  let handleChange = (event) => {
    let inputValue = event.target.value;
    setNameForm(inputValue);
  };

  return (
    <input data-testid="input" type="text" name="name" value={nameForm} onChange={handleChange} />
  );
};

export function PrintArrays() {
  let [arr, setArr] = React.useState([]);
  let handleClick = (event) => {
    setArr([...arr, arr.length]);
  };

  return (
    <div>
      <ul data-testid="list">
        {arr.map((a, index) => <li key={`ul-${index}`}>{a}</li>)}
      </ul>
      <button data-testid="button" onClick={handleClick}>Agrega un elemento</button>
    </div>
  );
};
