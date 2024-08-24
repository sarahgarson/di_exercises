import React from 'react';

function Navbar({ currentScore, topScore }) {
  return (
    <nav className="navbar">
      <h1>Superheroes Memory Game</h1>
      <div className="scores">
        <p>Current Score: {currentScore}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  );
}

export default Navbar;