import React, { useState, useEffect } from 'react';


//Exercise 4

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(()=>{
    return() => alert('useEffect reached');
    setFavoriteColor('yellow');
    },);

    const changeColor = () => {
      setFavoriteColor('blue');
    };

  return (
    <div>
      <h2>Color Exercise 4</h2>
      <h2>My favorite color is {favoriteColor}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};


export default Color;