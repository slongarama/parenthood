import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">parenthood</Link>
                <div className="collpase navbar-~collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/shop" className="nav-link">Shop</Link>
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
