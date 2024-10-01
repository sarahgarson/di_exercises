import React from 'react';
import Tasks from './features/tasks/Tasks';
import './App.css';

// Componente principal da aplicação
const App: React.FC = () => {
  return (
    <div className="App">
      <Tasks />
    </div>
  );
};

export default App;

