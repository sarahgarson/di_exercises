//Exercise 2 : Events

import React, { useState } from 'react';


const clickMe = () => {
  // alert('You clicked me!');

  const [inputValue, setInputValue] = useState('');

  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggle = () => {
    setIsToggleOn(prevState => !prevState);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You entered: ${inputValue}`);
    }
  };

  return (
    <>
    <h2>Exercise 2</h2>
    <div>
   <button onClick={() => alert('You clicked me!')}>Click Me</button>
   <input 
   type="text" 
   value={inputValue} 
   onChange={handleChange} 
   onKeyDown={handleKeyDown} 
   placeholder="Enter text here"/>
   </div>
   <button onClick={handleToggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
   </>
  );
};


export default clickMe;