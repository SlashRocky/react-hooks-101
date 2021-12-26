import React, { useEffect, useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { productName, price } = state;

  const increment = () => setState({ ...state, price: price + 1 });
  const decrement = () => setState({ ...state, price: price - 1 });
  const reset = () => setState(props);

  useEffect(() => {
    console.log("This is like componentDidMount or componetDidUpdate");
  });

  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("This callback is for productName only.");
  }, [productName]);

  return (
    <>
      <p>
        現在の{productName}は、{price}です。
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <input
        value={productName}
        onChange={(e) => setState({ ...state, productName: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  productName: "",
  price: 1000,
};

export default App;
