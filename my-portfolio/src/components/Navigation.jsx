import { NavLink } from "react-router-dom";

// import {Outlet} from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

import "./Navigation.css";
const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about", id: 2 },
    { name: "Resume", to: "/resume", id: 3 },
    { name: "Projects", to: "/projects", id: 4 },
    { name: "Contact", to: "/contact", id: 5 },
  ];
  return (
    <nav className="container">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

// import React, { useState, useEffect, createContext, useContext } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navigation.css";

// // Erstelle einen Kontext für die Sprache
// const LanguageContext = createContext();

// const Navigation = () => {
//   const [language, setLanguage] = useState("de");

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
//   };

//   useEffect(() => {
    // Hier könntest du Logik hinzufügen, um die Spracheinstellungen zu speichern oder zu laden
//   }, [language]);

//   const items = [
//     { name: language === "de" ? "Startseite" : "Home", to: "/", id: 1 },
//     { name: language === "de" ? "Über mich" : "About", to: "/about", id: 2 },
//     { name: language === "de" ? "Lebenslauf" : "Resume", to: "/resume", id: 3 },
//     { name: language === "de" ? "Projekte" : "Projects", to: "/projects", id: 4 },
//     { name: language === "de" ? "Kontakt" : "Contact", to: "/contact", id: 5 },
//   ];

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       <nav className="container">
//         <button className="language-btn" onClick={toggleLanguage}>
//           {language === "de" ? "Switch to English" : "Wechsel zu Deutsch"}
//         </button>
//         <ul>
//           {items.map((item) => {
//             return (
//               <li key={item.id}>
//                 <NavLink to={item.to}>{item.name}</NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </LanguageContext.Provider>
//   );
// };

// export default Navigation;

// Beispiel für die Verwendung des Sprachkontexts in einer anderen Komponente
// export const useLanguage = () => useContext(LanguageContext);
