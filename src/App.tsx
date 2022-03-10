import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MapLocation from './components/MapLocation';
import ContactInformation from './components/ContactInformations';
import Welcome from './components/Welcome';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Formations from './components/Formations';
import Articles from './components/Articles';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/acceuil" element={<Welcome />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/articles" element={<Articles />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
