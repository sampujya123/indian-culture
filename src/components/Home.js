import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // External CSS for styling

function Home() {
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 
    'West Bengal'
  ];

  return (
    <div className="home-container">
      <div className="flag-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
          alt="Indian Flag" 
          className="tiranga" 
        />
      </div>
      <h1 className="home-title">Welcome to BHARAT BEACON</h1>
      <p className="home-description">
        India is known for its rich heritage and culture, deeply rooted in its history, traditions, and diversity. 
        Explore the beauty of its states and learn more about India's contributions to the world.
      </p>
      <div className="states-section">
        <h2 className="section-title">Explore the States</h2>
        <div className="states-container">
          {states.map((state) => (
            <Link key={state} to={`/state/${state.replace(/\s+/g, '').toLowerCase()}`}>
              <button className="state-button">{state}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
