import { useState } from 'react';
import './App.css';


async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });

  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json(); 
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}


function App() {
  
  const handleClick = async () => {
    const url = 'https://webhook.site/f8f6fd25-3f76-4f90-8605-839f3ae870fb';
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27,
    };

    const response = await postData(url, data);
    if (response) {
      console.log('Response:', response);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Press me to post some data</button>
    </div>
  );
}

export default App;

