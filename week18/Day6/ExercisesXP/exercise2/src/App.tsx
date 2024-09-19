import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="Mundo" />
    </div>
  );
};

export default App;

