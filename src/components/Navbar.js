import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // External CSS for styling the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BHARAT BEACON</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/freedomfighters">Freedom Fighters</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
