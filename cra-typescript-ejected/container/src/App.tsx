// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import Module1 from "module1/Module1";
import Module2 from "module2/Module2";
import Module3 from "module3/Module3";
import Module2Home from "module2/Module2Home";
import Module2Contact from "module2/Module2Contact";

//const Module3 = React.lazy(() => import("module3/Module3"));

function App() {
  return (
    <Router>
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" className="Header-Text">
            Module Federation | React | Ejected | Typescript | Micro Frontend
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="Header-Text">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/module1" className="Header-Text">
                Module1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/module2" className="Header-Text">
                Module2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/module3" className="Header-Text">
                Module3
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/module1" element={<Module1 />} />
            <Route path="/module2" element={<Module2Home />} />
            <Route path="/module2/contact" element={<Module2Contact />} />
            <Route path="/module3" element={<Module3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
