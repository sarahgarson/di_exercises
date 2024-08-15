import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car.jsx'
import Events from './components/Events.jsx'
import Phone from './components/Phone.jsx'
import Color from './components/Color.jsx'

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Car carinfo={carinfo}/>
        <Events />
        <Phone/>
        <Color/>
      </div>
    </>
  )
}

export default App;
