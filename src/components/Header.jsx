import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import './Header.scss';

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Kasa Logo" />
        </NavLink>
      </div>
      <nav className="navbar-links">
        <NavLink to="/" exact activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;