import React, { Component } from 'react';
import '../Exercise.css';


class Exercise extends Component {

  render() {

    const style_header = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial'
    };

    return (
      <div>
        <h1 style={style_header}>Welcome to my new React app page!</h1>
        <p className="para">Welcome to my new app page, here you will learn how to use React</p>
        <a href="https://www.example.com">A link so you I can test it </a>
        <form>
          <label>
            Enter your name:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <img src="florian-olivo-4hbJ-eymZ1o-unsplash.jpg" alt="React Coding" width="300" />
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
