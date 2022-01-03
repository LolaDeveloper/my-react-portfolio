import React from "react";

import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/MyWork" activeStyle>
            My Projects
          </NavLink>
          <NavLink to="/contact-me" activeStyle>
            Contact Me
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
