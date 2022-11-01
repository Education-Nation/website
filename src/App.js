import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Contact, Events, Home, Navbar, Team} from './components/index.js';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}
