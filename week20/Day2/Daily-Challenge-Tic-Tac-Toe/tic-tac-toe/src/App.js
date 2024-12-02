import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    board: Array(9).fill(null),
    isXNext: true,
    winner: null,
    isAIMode: false,
    gameActive: true
  };

  patterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];

  handleClick = (index) => {
    const { board, isXNext, gameActive, isAIMode, winner } = this.state;
    
    if (board[index] || winner || !gameActive) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';

    this.setState({
      board: newBoard,
      isXNext: !isXNext
    }, () => {
      const winner = this.checkWinner();
      if (winner) {
        this.setState({ winner, gameActive: false });
      } else if (isAIMode && !isXNext && !this.isBoardFull()) {
        this.makeAIMove();
      }
    });
  };

  makeAIMove = () => {
    const { board } = this.state;
    const availableMoves = board.map((square, index) => 
      square === null ? index : null).filter(val => val !== null);
    
    if (availableMoves.length > 0) {
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      setTimeout(() => this.handleClick(randomMove), 500);
    }
  };

  checkWinner = () => {
    const { board } = this.state;

    for (let pattern of this.patterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return this.isBoardFull() ? 'Draw' : null;
  };

  isBoardFull = () => {
    return !this.state.board.includes(null);
  };

  resetGame = () => {
    this.setState({
      board: Array(9).fill(null),
      isXNext: true,
      winner: null,
      gameActive: true
    });
  };

  toggleMode = () => {
    this.setState({
      isAIMode: !this.state.isAIMode,
      board: Array(9).fill(null),
      isXNext: true,
      winner: null,
      gameActive: true
    });
  };

  render() {
    const { board, isXNext, winner, isAIMode } = this.state;

    return (
      <div className="game">
        <h1>Tic Tac Toe</h1>
        
        <div className="controls">
          <button onClick={this.toggleMode}>
            {isAIMode ? 'Switch to 2 Players' : 'Switch to AI Mode'}
          </button>
          <button onClick={this.resetGame}>Reset Game</button>
        </div>

        <div className="status">
          {winner ? 
            winner === 'Draw' ? 'Game Draw!' : `Winner: ${winner}` : 
            `Next Player: ${isXNext ? 'X' : 'O'}`}
        </div>

        <div className="board">
          {board.map((square, index) => (
            <div 
              key={index}
              className="square"
              onClick={() => this.handleClick(index)}
            >
              {square}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
