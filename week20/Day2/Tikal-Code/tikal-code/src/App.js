import React, { Component } from 'react';
import './App.css';
import VehicleTable from './components/VehicleTable';
import PlanetChart from './components/PlanetChart';

class App extends Component {
  state = {
    vehicleData: null,
    planetData: null,
    loading: true
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    
    const vehiclesResponse = await fetch('https://swapi.py4e.com/api/vehicles/');
    const vehiclesData = await vehiclesResponse.json();
    
    const vehicleDetails = await this.processVehicles(vehiclesData.results);
    
  
    const planets = ['Tatooine', 'Alderaan', 'Naboo', 'Bespin', 'Endor'];
    const planetData = await this.fetchPlanetsData(planets);

    this.setState({
      vehicleData: vehicleDetails,
      planetData,
      loading: false
    });
  };

  processVehicles = async (vehicles) => {
    const vehicleDetails = [];
    
    for (const vehicle of vehicles) {
      const pilots = await Promise.all(
        vehicle.pilots.map(pilotUrl => this.fetchPilotData(pilotUrl))
      );
      
      if (pilots.length > 0) {
        const populationSum = pilots.reduce((sum, pilot) => 
          sum + (pilot.homeworld.population === 'unknown' ? 0 : parseInt(pilot.homeworld.population)), 0);
          
        vehicleDetails.push({
          name: vehicle.name,
          pilots: pilots.map(p => p.name),
          planets: pilots.map(p => ({
            name: p.homeworld.name,
            population: p.homeworld.population
          })),
          totalPopulation: populationSum
        });
      }
    }
    
    return vehicleDetails.sort((a, b) => b.totalPopulation - a.totalPopulation);
  };

  fetchPilotData = async (url) => {
    const response = await fetch(url);
    const pilotData = await response.json();
    const homeworldResponse = await fetch(pilotData.homeworld);
    const homeworldData = await homeworldResponse.json();
    
    return {
      name: pilotData.name,
      homeworld: {
        name: homeworldData.name,
        population: homeworldData.population
      }
    };
  };

  fetchPlanetsData = async (planetNames) => {
    const planetsResponse = await fetch('https://swapi.py4e.com/api/planets/');
    const planetsData = await planetsResponse.json();
    
    return planetsData.results
      .filter(planet => planetNames.includes(planet.name))
      .map(planet => ({
        name: planet.name,
        population: planet.population === 'unknown' ? 0 : parseInt(planet.population)
      }));
  };

  render() {
    const { loading, vehicleData, planetData } = this.state;

    if (loading) {
      return <div className="loading">Loading Star Wars data...</div>;
    }

    return (
      <div className="app">
        <h1>Star Wars Data Analysis</h1>
        
        <section className="vehicle-section">
          <h2>Vehicle with Highest Pilot Planet Population</h2>
          <VehicleTable data={vehicleData[0]} />
        </section>

        <section className="planet-section">
          <h2>Planet Populations</h2>
          <PlanetChart data={planetData} />
        </section>
      </div>
    );
  }
}

export default App;
