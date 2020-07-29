import React from "react";
import logo from "./../../assets/icons/logo.png";
import "./styles.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggle navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
        <div className="close-icon top-line"></div>
        <div className="close-icon middle-line"></div>
        <div className="close-icon bottom-line"></div>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Conócenos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Our Products" className="navbar-img" />
      </a>
      <div></div>
      {/* <i className="fas fa-shopping-cart fa-lg"></i> */}
    </nav>
  );
};

export default NavBar;
