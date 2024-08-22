import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent.jsx';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [destination, setDestination] = useState('nyc');
  const [isNutsFree, setIsNutsFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      firstName,
      lastName,
      age,
      gender,
      destination,
      dietaryRestrictions: {
        isNutsFree,
        isLactoseFree,
        isVegan,
      },
    }).toString();

    window.location.href = `?${queryParams}`;
  };

  return (
    <>
      <h2>Sample Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />

        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <select onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />

        <select onChange={(e) => setDestination(e.target.value)}>
          <option value="nyc">New York City</option>
          <option value="london">London</option>
          <option value="los angeles">Los Angeles</option>
          <option value="paris">Paris</option>
        </select>
        <br />

        Nuts Free
        <input
          type="checkbox"
          onChange={(e) => setIsNutsFree(e.target.checked)}
        />
        <br />

        Lactose Free
        <input
          type="checkbox"
          onChange={(e) => setIsLactoseFree(e.target.checked)}
        />
        <br />

        Vegan
        <input
          type="checkbox"
          onChange={(e) => setIsVegan(e.target.checked)}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
      <br/>

      <hr/>

      <FormComponent
        firstName={firstName}
        lastName={lastName}
        age={age}
        gender={gender}
        destination={destination}
        isNutsFree={isNutsFree}
        isLactoseFree={isLactoseFree}
        isVegan={isVegan}
      />
    </>
  );
}

export default App;
