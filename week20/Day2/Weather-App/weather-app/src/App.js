import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    city: '',
    country: '',
    temperature: null,
    humidity: null,
    description: '',
    error: null
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { city, country } = this.state;
    const API_KEY = '737c6c3edc8ff425d3da6ad1e9100577';
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      
      if (response.ok) {
        this.setState({
          temperature: Math.round(data.main.temp),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: null
        });
      } else {
        this.setState({
          error: 'Location not found. Please try again.'
        });
      }
    } catch (error) {
      this.setState({
        error: 'Something went wrong. Please try again.'
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { city, country, temperature, humidity, description, error } = this.state;

    return (
      <div className="weather-app">
        <h1>Weather Finder</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="City..."
            value={city}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country..."
            value={country}
            onChange={this.handleChange}
          />
          <button type="submit">Get Weather</button>
        </form>

        {error && <div className="error">{error}</div>}
        
        {temperature && (
          <div className="weather-info">
            <div className="weather-item">
              <span>Temperature:</span> {temperature}°C
            </div>
            <div className="weather-item">
              <span>Humidity:</span> {humidity}%
            </div>
            <div className="weather-item">
              <span>Conditions:</span> {description}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
