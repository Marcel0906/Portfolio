import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="main">
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
        <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    <div className="App">
   <Header />
      </div>
    </div>
  );
}

export default App;
