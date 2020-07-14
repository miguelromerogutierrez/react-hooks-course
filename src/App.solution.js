import React from "react";
import Client from './utils/client-dropdown';

export function Dropdown() {
  let [show, toggle] = React.useState(false);

  React.useEffect(() => {
    let hideDropdown = () => {
      if (show) toggle(false)
    };
    window.addEventListener("click", hideDropdown);
    return () => window.removeEventListener("click", hideDropdown);
  }, [show]);

  let handleClick = () => {
    toggle(!show);
  };

  return (
    <div>
      <button data-testid="dd-button" onClick={handleClick}>
        Dropdown
      </button>
      {
        show ? (
          <ul data-testid="dd-list">
            <li><button>opt1</button></li>
            <li><button>opt2</button></li>
            <li><button>opt3</button></li>
          </ul>
        ) : null
      }
    </div>
  );
}

export function DropdownControlled(props) {
  let [show, toggle] = React.useState(false);
  let [valueDD, setValue] = React.useState(props.value || props.placeholder);

  React.useEffect(() => {
    setValue(props.value || props.placeholder);
  }, [props.value]);

  let handleClick = () => {
    toggle(!show);
  };

  let select = (value) => (event) => {
    toggle(false);
    if (typeof props.onSelect === 'function') {
      props.onSelect(event, value);
    } else {
      setValue(value);
    }
  };

  return (
    <div>
      <button data-testid="dd-button" onClick={handleClick}>
        {valueDD}
      </button>
      {
        show ? (
          <ul data-testid="dd-list">
            {props.options.map((opt, i) => (
              <li key={`dd-${i}`}><button onClick={select(opt.value)}>{opt.text}</button></li>
            ))}
          </ul>
        ) : null
      }
    </div>
  );
};

export function AsyncLoad(props) {
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    Client.load()
      .then(__data => {
        setData(__data);
      });
  }, []);

  React.useEffect(() => {
    if (props.refresh) {
      Client.refresh()
        .then(__data => {
          setData(__data);
          props.doneRefresh(__data);
        });
    }
  }, [props.refresh]);
  return (
    <div>
      {
        data.length === 0 || props.refresh
        ? 'Loading...'
        : (
          <ul data-testid="list">
            {data.map((element, i) => (
              <li key={`al-${i}`}>{element}</li>
            ))}
          </ul>
        )
      }
    </div>
  );
};
