import React from 'react';

const PlanetChart = ({ data }) => {
  const maxPopulation = Math.max(...data.map(planet => planet.population));
  
  return (
    <div className="planet-chart">
      <div className="bars">
        {data.map(planet => (
          <div key={planet.name} className="bar-container">
            <div 
              className="bar"
              style={{
                height: `${(planet.population / maxPopulation) * 300}px`
              }}
            />
            <span className="planet-name">{planet.name}</span>
          </div>
        ))}
      </div>
      
      <div className="legend">
        {data.map(planet => (
          <div key={planet.name} className="legend-item">
            <span className="planet-name">{planet.name}</span>
            <span className="population">{planet.population.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetChart;
