import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";


const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/about", element: <About />, id: 2 },
  { path: "/resume", element: <Resume />, id: 3 },
  { path: "/projects", element: <Projects />, id: 4 },
  { path: "/contact", element: <Contact />, id: 5 },
];
export default routes;
