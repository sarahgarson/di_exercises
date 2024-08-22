import { useState } from 'react'

import './App.css'

function App() {
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [result, setResult] = useState(0);
const [operator, setOperator] = useState('add');



const handleCalculation = () => {
  let calculatedResult;
  switch (operator) {
    case 'add':
      calculatedResult = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      calculatedResult = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      calculatedResult = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      calculatedResult = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      calculatedResult = 0;
      break;
  }
  setResult(calculatedResult);
};

  return (
    <>
    <div className="App">
    <h2>Adding Two Numbers</h2>
    <input 
      type="number" 
      value={num1} 
      onChange={(e) => setNum1(e.target.value)} 
      placeholder="Enter first number" 
    />
    <input 
      type="number" 
      value={num2} 
      onChange={(e) => setNum2(e.target.value)} 
      placeholder="Enter second number" 
    />
    <select onChange={(e) => setOperator(e.target.value)}>
      <option value="add">Add</option>
      <option value="subtract">Subtract</option>
      <option value="multiply">Multiply</option>
      <option value="divide">Divide</option>
    </select>
    </div>
    <br/>
    <div>
    <button onClick={handleCalculation}>Calculate</button>
    <h1>{result}</h1>
    </div>
 
</>
  )
}

export default App;
