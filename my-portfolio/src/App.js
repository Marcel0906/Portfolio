import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./components/Routes";
import Layout from "./layout/Layout";

// import Home from './pages/Home';
// import About from "./pages/About.jsx";
// import Resume from "./pages/Resume.jsx";
// import Projects from "./pages/Projects.jsx";
// import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
          
        ))}
      </Routes>
      {/* The OnePager method only works on every page
      <About/>
      <Resume/>
      <Projects/>
      <Contact/> */} 
    </Layout>
    //   <div className="main">
    //     <main className='navigation'>
    //     <nav>
    //         <ul>
    //         <li><NavLink to="/Home">Home</NavLink></li>
    //           <li><NavLink to="/About">About</NavLink></li>
    //           <li><NavLink to="/Resume">Resume</NavLink></li>
    //           <li><NavLink to="/Projects">Projects</NavLink></li>
    //           <li><NavLink to= "/Contact">Contact</NavLink></li>
    //         </ul>
    //       </nav>
    //       </main>
    //       <Routes>
    //       <Route path="/Home" element={<Home/>} />
    //         <Route path="/About" element={<About />} />
    //         <Route path="/Resume" element={<Resume />} />
    //         <Route path="/Projects" element={<Projects />} />
    //         <Route path="/Contact" element={<Contact />} />
    //       </Routes>
    //   <div className="App">
    //  <Header />
    //     </div>
    //   </div>
  );
}

export default App;
