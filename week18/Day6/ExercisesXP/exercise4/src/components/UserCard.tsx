import React from 'react';

// Interface para as props do componente
interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      {name && age ? (
        <>
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
        </>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  );
};

export default UserCard;

// Notas para mimmm :
// Interface para as props do componente
// O '?' após o nome da prop indica que ela é opcional

// Componente UserCard
// Desestruturamos as props opcionais name e age

// Renderizamos as informações do usuário se estiverem disponíveis
// Caso contrário, exibimos uma mensagem padrão
