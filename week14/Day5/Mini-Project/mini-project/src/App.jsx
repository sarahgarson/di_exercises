import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quotes from './components/Quotes'
// import quotes from '../QuotesDatabase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quotes/>
    </>
  )
}

export default App
