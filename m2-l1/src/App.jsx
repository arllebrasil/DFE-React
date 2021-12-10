import { useState } from 'react';
import './App.css';

function App() {

  let [value1, setValue1] = useState(0);
  let [value2, setValue2] = useState(0);
  let [result, setResult] =  useState(0);

  function onValue1Change(event){
    const value  = event.target.value;
    setValue1(value);
  }

  function onValue2Change(event){
    const value = event.target.value;
    setValue2(value);
  }

  function onResult(){
    setResult(Number(value1)+Number(value2));
  }

  return (
    <div className="App">
      <div className="title">
        <h1>App Name</h1>
      </div>
      <div className="calc">
        <div className="inputs">
          <input type="number" onChange={onValue1Change} value={value1} />
          <input type="number" onChange={onValue2Change} value={value2} />
        </div>
        <button onClick={onResult} >+</button>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
