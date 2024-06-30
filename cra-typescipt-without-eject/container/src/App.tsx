import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Home from "./pages/Home";
import Module1 from "module1/Module1";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" className="Header-Text">
            Module Federation | React CRA | Typescript | Micro Frontend
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
          </Nav>
        </Navbar>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module1" element={<Module1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
