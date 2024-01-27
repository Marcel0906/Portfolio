import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "About Us", to: "/about-us", id: 2 },
    { name: "Projects", to: "/projects", id: 3},
    {name: "Resume", to: "/resume", id: 4},
    { name: "Contact", to: "/contact", id: 5},

  ];
  return (
    <nav className="container">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink>
                
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
