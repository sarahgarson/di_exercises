import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarouselComponent from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div className="container mt-5">
      <h1 className="text-center mb-4">React Carousel</h1>
      <CarouselComponent />
      </div>
    </>
  )
}


export default App
