import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
  <nav className="main-nav row">
    <div className="nav-text-container">
      <Link to="/" className="nav-logo-text">
        <h4>Bootcamp DevSuperior</h4>
      </Link>
    </div>
  </nav>
);

export default Navbar;