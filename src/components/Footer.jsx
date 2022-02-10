import { Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import React from "react";
import logo from "./../assets/logo.png";

function Footer() {
  return (
    <footer className='footer'>
      <img className='logo' src={logo} alt="logo image" />
      <div id='footerLinks'>
        <Link className='Link' to="/contact">Contact Us</Link>
        <Link className='Link' to="/legal">Legal</Link>
        <Link className='Link' to="/Legal">Facebook</Link>
        <Link className='Link' to="/Legal">Twitter</Link>
        <Link className='Link' to="/Legal">Instagram</Link>
      </div>
    </footer>
  );
}

export default Footer;
