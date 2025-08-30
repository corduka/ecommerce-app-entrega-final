import React from "react";
import logo from "../assets/logo.png";
function About() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Organic Life Logo" />
      </div>
      <p className="footer-text">
        We craft products inspired by nature, combining generations of human
        history with the purest fruits and vegetables. No additives, only
        nature’s gifts.
      </p>
      <p className="footer-rights">
        © {new Date().getFullYear()} Organic Life. All rights reserved.
        <br />
        <span>Coded with 💚 by Corduka</span>
      </p>
    </footer>
  );
}

export default About;
