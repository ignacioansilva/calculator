import logo from './logo.svg';
import './App.css';

import Button from './Components/Button.js';
import ButtonClear from './Components/ButtonClear.js';
import Screen from './Components/Screen.js';

import {useState} from "react";
import {evaluate,prodDependencies} from "mathjs";

function App() {

  const [input, setInput] = useState ("")


  const addInput = value => {
    setInput (input + value);
  }

  const calculateInput = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingrese un valor para calcular el resultado")
    }
  }


  


  return (
    <div className="App">
      
      <div className='calc-container'>
        <Screen input={input} />

        <div className='fila'>
          <Button manejarClick={addInput}>7</Button>
          <Button manejarClick={addInput}>8</Button>
          <Button manejarClick={addInput}>9</Button>
          <Button manejarClick={addInput}>+</Button>

        </div>
        <div className='fila'>
          <Button manejarClick={addInput}>4</Button>
          <Button manejarClick={addInput}>5</Button>
          <Button manejarClick={addInput}>6</Button>
          <Button manejarClick={addInput}>-</Button>
          
        </div>
        <div className='fila'>
          <Button manejarClick={addInput}>1</Button>
          <Button manejarClick={addInput}>2</Button>
          <Button manejarClick={addInput}>3</Button>
          <Button manejarClick={addInput}>*</Button>
          
        </div>
        <div className='fila'>
          <Button manejarClick={addInput}>0</Button>
          <Button manejarClick={addInput}>.</Button>
          <Button manejarClick={calculateInput}>=</Button>
          <Button manejarClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClear={() => setInput("")}>C</ButtonClear>
           
        </div>
      </div>

    </div>
  );
}

export default App;
