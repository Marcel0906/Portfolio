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
