import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FreedomFighters from './components/FreedomFighters';
import Quiz from './components/Quiz';
import Chatbot from './components/Chatbot';
import StateDetails from './components/StateDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freedomfighters" element={<FreedomFighters />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/state/:stateId" element={<StateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
