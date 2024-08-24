import { useState, useEffect } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import heroesData from './heroes.json'
import './App.css';



function App() {

 const [heroes, setHeroes] = useState([heroesData.superheroes]);
 const [currentScore, setCurrentScore] = useState(0);
 const [topScore, setTopScore] = useState(0);

 useEffect(() => {
  setHeroes(heroesData.superheroes);
  console.log("Heroes set in useEffect:", heroesData.superheroes);
}, []);

console.log("Heroes:", heroes);


 const shuffleHeroes = () => {

  const shuffle = [...heroes].sort(() => Math.random() - 0.5);

  setHeroes(shuffle);

 }


 const handleCardClick = (id) => {
  const clickedHero = heroes.find(hero => hero.id === id);
  if (clickedHero.clicked) {
    setCurrentScore(0);
    setHeroes(heroes.map(hero => ({ ...hero, clicked: false })));
  } else {
    setCurrentScore(currentScore + 1);
    setHeroes(heroes.map(hero => 
      hero.id === id ? { ...hero, clicked: true } : hero
    ));
  }
  shuffleHeroes();
}

 useEffect (() => {
  if (currentScore > topScore) {
    setTopScore(currentScore);
  }
 }, [currentScore, topScore]);


  return (
    <>
     <div className= "App">
<Navbar currentScore={currentScore} topScore={topScore} />
    <div className="container">
      {heroes.map(hero => (
        <Card
          key={hero.id}
          id={hero.id}
          name={hero.name}
          image={hero.image}
          occupation={hero.occupation}
          onClick={() => handleCardClick(hero.id)}
        />
      ))}

      </div>


    </div>
   
    </>
  )
}

export default App;
