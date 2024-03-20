import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./navbar.css";
import { useTranslation } from 'react-i18next';
import Lang_butt from '../lang_butt/lang_butt';

const Navbar = () => {
  const { t } = useTranslation();
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
                <Link className="nav-link" to="/" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen} activeclassname="active">
                    <span>{t("Services")}</span> &darr;
                </Link>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                    <NavLink className="dropdown-item" to="/" activeclassname="active"><span>{t("Scooters")}</span></NavLink>
                    <NavLink className="dropdown-item" to="/taxi" activeclassname="active"><span>{t("Taxi")}</span></NavLink>
                    <NavLink className="dropdown-item" to="/driver" activeclassname="active"><span>{t("Become a driver")}</span></NavLink>
                </div>
            </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeclassname="active">{t("About")}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/franchise" activeclassname="active">{t("Franchise")}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/locations" activeclassname="active">{t("Locations")}</NavLink>
          </li>
          <li>
            <Lang_butt />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
