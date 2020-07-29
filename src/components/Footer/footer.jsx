import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container-fluid">
          <a href="https://www.instagram.com/pastelli.reposteria/">
            <i className="social-icon fab fa-instagram fa-3x"></i>
          </a>
          <a href="https://www.facebook.com/PastelliReposteriaMx/">
            <i className="social-icon fab fa-facebook-square fa-3x"></i>
          </a>
          <a href="/contact">
            <i className="social-icon fas fa-envelope fa-3x"></i>
          </a>
          <p className="footer-brand">© 2020 Pastelli</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
