import { Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import React from "react";
import logo from "./../assets/logo.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo image" />
      <div>
      <Link to="/contact">Contact Us</Link>
      <Link to="/legal">Legal</Link>
      <Link to="/Legal">Facebook</Link>
      <Link to="/Legal">Twitter</Link>
      <Link to="/Legal">Instagram</Link>
      </div>
    </footer>
  );
}

export default Footer;
