import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="image">
      <main className='navigation'>
      <nav>
          <ul>
          <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Resume">Resume</NavLink></li> 
            <li><NavLink to="/Projects">Projects</NavLink></li> 
            <li><NavLink to= "/Contact">Contact</NavLink></li>
          </ul>
        </nav>
        </main>  
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    <div className="App">
   <Header/>
      </div>
    </div>
  );
}

export default App;
