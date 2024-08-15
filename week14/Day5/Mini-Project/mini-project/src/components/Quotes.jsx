import React, { useState, useEffect } from 'react';

import quotes from '../QuotesDatabase.js';



const QuotesGenerator = () => { 


  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);
  const [color, setColor] = useState('#000000'); 
  

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);


    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor); 

  };


  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <div >

    <div style={{ 
      textAlign: 'center', padding: '50px', backgroundColor: 'white', color: color }}>

    <h1 id="quote-text">{quote}</h1>

    <h3>- {author}</h3>

    <button 
      id="new-quote-button" 
      onClick={generateRandomQuote}
      style={{ 
        padding: '10px 20px', 
        fontSize: '16px', 
        cursor: 'pointer', 
        backgroundColor: color, 
        color: '#fff', 
        border: 'none' 
      }}
    >
      New Quote
    </button>
  </div>

  </div>
  );
};


export default QuotesGenerator;