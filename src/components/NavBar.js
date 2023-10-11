import React from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#"><img className="logo" src={logo} alt='logo'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
</>
    );
}
export default NavBar;