import React, { useState } from 'react';

// Exercise 3 : Phone
const Phone = () => {

  const [brand, setBrand] = useState('Samsung');
  const [model, setModel] = useState('Galaxy S20');
  const [color, setColor] = useState('black');
  const [year, setYear] = useState(2020);

  //part II
  const changeColor = () => {
    setColor('blue');
  };

  return (
    <div>
      <h2>Phone Exercise 3</h2>
      <h2>My phone is a {brand}</h2>
<p> Its is a {color} {model} from {year}</p>
<button onClick={changeColor} > Change Color </button>
    </div>
  );
};


export default Phone;