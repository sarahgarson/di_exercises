import React, { Component } from 'react';

//EXERCISE 2: OBJECT
class UserFavoriteAnimals extends Component {
  render() {
    const { favAnimals } = this.props;
    return (
      <ul>
        {favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
