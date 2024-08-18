import { useState } from 'react';
import './App.css';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Color from './components/Color-Day2.jsx';
import {Child} from './components/Color-Day2.jsx';



//Exercise 1 : React Error Boundary Simulation

class BuggyCounter extends React.Component {
  state = {
    count: 0
  }


  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };


  render() {
    if (this.state.count === 5) {
      
      throw new Error('I crashed!')
    }
    return <button onClick={this.handleClick}>Count: {this.state.count}</button>
  };
};



function App() {
  const [count, setCount] = useState(0)
  const [showColor, setShowColor] = useState(true);

  const handleDelete = () => {
    setShowColor(false);
  };

  return (
    <>
<div>

<h2>Click on the numbers to increase the counters.
The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h2>

</div>

<hr/>

<div>
<h3>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</h3>
      <ErrorBoundary >
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      </div>

<hr/>

      <div>
<h3>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</h3>

<ErrorBoundary>
        <BuggyCounter shouldThrow={false} />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter shouldThrow={true} />
      </ErrorBoundary>
      </div>

      <div>

<hr/>

<h3>This counter is not inside of boundary. So if crashes, all other components are deleted..</h3>

     
        <BuggyCounter />
     
      </div>

      <Color/>

<div>
{/* 4. Render the Child component in your App, only if the value of the show property is set to true. */}

<h3>Render the Child component in your App, only if the value of the show property is set to true.</h3>
        {showColor && <Child/>} 
        {/*5. Create a “Delete” button that when clicked on (ie. onClick) will call a function that updates the value of the show property to false. */}
        <button onClick={handleDelete}>Delete Header</button>
      </div>
    </>
  );
};

export default App;
