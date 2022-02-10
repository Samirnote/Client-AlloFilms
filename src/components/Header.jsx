import { Routes, Route } from "react-router-dom";
import NavMain from "./Nav/NavMain";

import React from "react";
import logo from "./../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo image" />
      <NavMain />
    </header>
  );
}

export default Header;
