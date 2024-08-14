import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise from './components/Exercise3';


//EXERCISE 1: WITH JSX

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

//EXERCISE 2: OBJECT
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <p>
        Hello World!
      </p>

      {myelement}
      
      <p>React is {sum} times better with JSX!</p>

    

      <h3>{user.firstName} {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <Exercise />
      
    </>
    
  )
};

export default App;
