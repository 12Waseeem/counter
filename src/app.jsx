import { useState, useEffect } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  let [counter, setCounter] = useState(10);
  //let counter = 5;
  const addValue = () => {
    //counter = counter + 1;
    if (counter == 20) counter = 20;
    else counter = counter + 1;
    setCounter(counter);
  };
  const reduceValue = () => {
    //counter = counter + 1;
    if (counter == 0) counter = 0;
    else counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1> Chai And React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}
