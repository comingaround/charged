import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const showDropdown = () => setIsDropdownOpen(true);
  const hideDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <NavLink className="navbar-brand" to="/">
        <div id="logo">
          <img src="/logo.png" alt="" />
        </div>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isDropdownOpen} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <NavLink className="nav-link" to="/" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen} activeclassname="active">
                    Home
                </NavLink>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                    <NavLink className="dropdown-item" to="/" activeclassname="active">Home <span className="dropdown-item-ani"></span></NavLink>
                    <NavLink className="dropdown-item" to="/taxi" activeclassname="active">Taxi <span className="dropdown-item-ani"></span></NavLink>
                    <NavLink className="dropdown-item" to="/driver" activeclassname="active">Driver <span className="dropdown-item-ani"></span></NavLink>
                </div>
            </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeclassname="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/franchise" activeclassname="active">Franchise</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/locations" activeclassname="active">Locations</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
