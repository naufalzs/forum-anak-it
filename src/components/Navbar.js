import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavbarMobile from "./NavbarMobile";

export default function Navbar({ setModalLogin, setModalRegister }) {
  return (
    <div id="navbar">
      <div className="navbar-content">
        <div className="navbar-content--left">
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
        <ul className="navbar-content--right">
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
        <NavbarMobile
          setModalLogin={(value) => setModalLogin(value)}
          setModalRegister={(value) => setModalRegister(value)}
        />
      </div>
    </div>
  );
}
