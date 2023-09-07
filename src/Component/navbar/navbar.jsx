import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Nav, Dropdown, NavDropdown } from "react-bootstrap";

function Navbar() {
  //change color after navbar scrooling
  const [colorbg, setColorbg] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const changecolor = () => {
    if (window.scrollY >= 90) {
      setColorbg(true);
    } else {
      setColorbg(false);
    }
  };
  window.addEventListener("scroll", changecolor);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top ${
          colorbg ? "hearder-bg" : "header"
        }`}
        // className="navbar navbar-expand-lg sticky-top bg-body-tertiary"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Nav.Link
            className="navbar-brand py-3 mx-lg-4 mx-md-4 px-lg-5 px-md-5"
            href="/"
          >
            <b className="nav-name">Usama</b>
            <span className="nav-dot">.</span>
            <b className="nav-name-dev">Dev</b>
          </Nav.Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Nav.Link className="nav-link" aria-current="page" href="#home">
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item ">
                <Nav.Link className="nav-link" href="#project">
                  Project
                </Nav.Link>
              </li>
              <li className="nav-item ">
                <Nav.Link className="nav-link" href="#about">
                  About
                </Nav.Link>
              </li>
              <li
                className="nav-item1"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown
                  className="nav-link1"
                  title="Resume"
                  id="basic-nav-dropdown"
                  show={showDropdown}
                >
                  <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item>
                  <NavDropdown.Item href="#experience">Skills</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item nav-item-contact">
                <Nav.Link className="nav-link" href="#contact">
                  Contact
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
