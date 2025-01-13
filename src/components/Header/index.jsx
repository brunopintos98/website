import React from "react";
import HeaderOption from "./HeaderOption";
import "./styles.css";

const Header = ({ selected }) => (
  <nav className="header-container">
    <HeaderOption selected={selected} name="" displayName="ABOUT ME" />
    <HeaderOption selected={selected} name="projects" displayName="PROJECTS" />
    {/* <HeaderOption selected={selected} name="skills" displayName="SKILLS" /> */}
  </nav>
);

export default Header;
