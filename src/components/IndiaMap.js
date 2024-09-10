import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Navbar from './Navbar';

const indiaMapUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

function IndiaMap() {
  const [selectedState, setSelectedState] = useState(null);

  const stateDetails = {
    "Maharashtra": { capital: "Mumbai", language: "Marathi", population: "112 million" },
    "Karnataka": { capital: "Bangalore", language: "Kannada", population: "68 million" },
    // Add more states here
  };

  const handleStateClick = (stateName) => {
    setSelectedState(stateDetails[stateName]);
  };

  return (
    <div>
      <Navbar />
      <h1>Interactive India Map</h1>
      <ComposableMap>
        <Geographies geography={indiaMapUrl}>
          {({ geographies }) => geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => handleStateClick(geo.properties.name)}
              style={{
                default: { fill: "#D6D6DA" },
                hover: { fill: "#F53" },
                pressed: { fill: "#E42" }
              }}
            />
          ))}
        </Geographies>
      </ComposableMap>
      {selectedState && (
        <div>
          <h2>State Details</h2>
          <p>Capital: {selectedState.capital}</p>
          <p>Language: {selectedState.language}</p>
          <p>Population: {selectedState.population}</p>
        </div>
      )}
    </div>
  );
}

export default IndiaMap;
