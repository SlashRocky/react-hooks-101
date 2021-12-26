import React, { useState } from "react";

const App = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const increment = () => {
    setPrice((prevPrice) => prevPrice + 1);
  };
  const decrement = () => {
    setPrice((prevPrice) => prevPrice - 1);
  };
  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
    <>
      <p>
        現在の{name}は、{price}です。
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
