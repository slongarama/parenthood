import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">parenthood</Link>
        <div className="navbar-nav all-links">
          <ul className="navbar-group right">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Shop</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about-us" className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
