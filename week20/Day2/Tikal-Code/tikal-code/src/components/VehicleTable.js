import React from 'react';

const VehicleTable = ({ data }) => (
  <div className="vehicle-table">
    <h3>Vehicle: {data.name}</h3>
    
    <div className="table-section">
      <h4>Pilot Planets and Populations:</h4>
      <ul>
        {data.planets.map((planet, index) => (
          <li key={index}>
            {planet.name}: {planet.population}
          </li>
        ))}
      </ul>
    </div>

    <div className="table-section">
      <h4>Pilots:</h4>
      <ul>
        {data.pilots.map((pilot, index) => (
          <li key={index}>{pilot}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default VehicleTable;
