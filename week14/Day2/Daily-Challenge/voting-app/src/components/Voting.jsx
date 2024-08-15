import {useState} from 'react';


const Voting = () => {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const add = (index)=> {
    //spread operator 
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    //After modifying the newLanguages array, we update the state using the setLanguages function provided by useState.
    setLanguages(newLanguages);
  }

  return (
    <div>
      <h1>Voting App</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={language.name}>
            <button onClick={() => add(index)}>Add vote</button>
            {language.name} has {language.votes} votes
    
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Voting;