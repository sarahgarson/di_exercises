
//Exercise 1 : Car And Components


import React, { useState } from 'react';

import Garage from './Garage'; // Adjust the path as necessary



const Car = ({carinfo}) => {

  const [color, setColor] = useState('black');


  return (
    <div>
     
      <h1>This car is {carinfo.model}</h1>
      <h2> The color is {color} </h2>
      <Garage size="small"/> 
    </div>
  )
}

export default Car;