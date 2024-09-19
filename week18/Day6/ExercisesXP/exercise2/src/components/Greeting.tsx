import React from 'react';

// Interface para as props do componente
interface GreetingProps {
  name: string;
}

// Componente Greeting
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hey there, {name}!</h1>;
};

export default Greeting;
