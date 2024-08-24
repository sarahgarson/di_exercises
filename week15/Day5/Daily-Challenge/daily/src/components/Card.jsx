import React from 'react'

function Card({ id, name, image, occupation,onClick }) {
  return (
    <div className='card' onClick={() => onClick(id)}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{occupation}</p>
    </div>
  )
}

export default Card;