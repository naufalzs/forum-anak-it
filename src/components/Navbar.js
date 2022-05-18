import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Navbar({ setModalLogin, setModalRegister }) {
  const [navbarMenu, setNavbarMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="brand-title">Forum Anak IT</h1>
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="search-input"
            />
            {/* Search */}
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
          </div>
        </div>
        <ul className="navbar-right">
          <li>
            Categories
            <ul className="category-dropdown">
              <li>Linux</li>
              <li>Windows</li>
              <li>MAC OS</li>
              <li>Android</li>
              <li>iOS</li>
            </ul>
          </li>
          <li onClick={() => setModalLogin(true)}>Login</li>
          <li onClick={() => setModalRegister(true)}>Register</li>
        </ul>
        <div className="navbar-mobile-menu" onClick={() => setNavbarMenu(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {navbarMenu && (
          <ul className="navbar-mobile">
            <div className="navbar-mobile-header">
              <div
                onClick={() => setNavbarMenu(false)}
                className="navbar-mobile-close-button"
              >
                <FontAwesomeIcon icon={faXmark} className="icon-close" />
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="search-input"
                />
                {/* Search */}
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="icon-search"
                />
              </div>
            </div>
            <li>Categories</li>
            <ul className="category-dropdown-mobile">
              <li>Linux</li>
              <li>Windows</li>
              <li>MAC OS</li>
              <li>Android</li>
              <li>iOS</li>
            </ul>
            <li onClick={() => setModalLogin(true)}>Login</li>
            <li onClick={() => setModalRegister(true)}>Register</li>
          </ul>
        )}
      </div>
    </div>
  );
}
