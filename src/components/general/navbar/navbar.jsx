import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const showDropdown = () => setIsDropdownOpen(true);
  const hideDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navbar-brand" to="/">
        <div id="logo">
          <h3 style={{fontStyle:"italic"}}> Charged </h3>
        </div>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isDropdownOpen} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <NavLink className="nav-link" to="/" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen} activeclassname="active">
                    Services &darr;
                </NavLink>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                    <NavLink className="dropdown-item" to="/" activeclassname="active">Scooters</NavLink>
                    <NavLink className="dropdown-item" to="/taxi" activeclassname="active">Taxi</NavLink>
                    <NavLink className="dropdown-item" to="/driver" activeclassname="active">Driver</NavLink>
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
