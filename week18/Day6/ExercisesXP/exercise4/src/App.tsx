import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <UserCard name="John Doe" age={30} />
      <UserCard name="Jane Doe" />
      <UserCard />
    </div>
  );
};

export default App;

