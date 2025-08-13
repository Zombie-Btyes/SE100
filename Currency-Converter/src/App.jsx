import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    // Making request
    console.log("Making API Request");
  }, []);

  function handleClick(){
    alert("Button clicked!");
  }

  function changeClick(){
    alert("Currency changed!");
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <button onClick={handleClick}>
        Click me
      </button>
      <button onChange={changeClick}>
        <select className='currency' id='currencySelect'>
          <option value="usd">USD</option>
          <option value="jpy">JPY</option>
          <option value="sgd">SGD</option>
          <option value="myr">MYR</option>
        </select>
      </button>
    </>
  )
}

export default App;
