import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    display: '0',
    equation: ''
  };

  handleNumber = (number) => {
    const { display } = this.state;
    if (display === '0') {
      this.setState({ display: number });
    } else {
      this.setState({ display: display + number });
    }
  };

  handleOperator = (operator) => {
    const { display, equation } = this.state;
    this.setState({
      equation: equation + display + operator,
      display: '0'
    });
  };

  handleEqual = () => {
    const { display, equation } = this.state;
    const result = eval(equation + display);
    this.setState({
      display: result,
      equation: ''
    });
  };

  handleClear = () => {
    this.setState({
      display: '0',
      equation: ''
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={this.handleClear}>C</button>
          <button onClick={() => this.handleNumber('7')}>7</button>
          <button onClick={() => this.handleNumber('8')}>8</button>
          <button onClick={() => this.handleNumber('9')}>9</button>
          <button onClick={() => this.handleOperator('/')}>/</button>
          <button onClick={() => this.handleNumber('4')}>4</button>
          <button onClick={() => this.handleNumber('5')}>5</button>
          <button onClick={() => this.handleNumber('6')}>6</button>
          <button onClick={() => this.handleOperator('*')}>×</button>
          <button onClick={() => this.handleNumber('1')}>1</button>
          <button onClick={() => this.handleNumber('2')}>2</button>
          <button onClick={() => this.handleNumber('3')}>3</button>
          <button onClick={() => this.handleOperator('-')}>-</button>
          <button onClick={() => this.handleNumber('0')}>0</button>
          <button onClick={() => this.handleNumber('.')}>.</button>
          <button onClick={this.handleEqual}>=</button>
          <button onClick={() => this.handleOperator('+')}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
