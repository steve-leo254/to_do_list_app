import React, { useState } from "react";
import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
} from "reactstrap";


const NavBar: React.FC = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);

 return (
    <div>
      <Navbar color="faded" light className="navbar-custom">
        <NavbarBrand href="/" className="me-auto navbar-brand-custom">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="me-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/" className="nav-link-custom">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="nav-link-custom">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
 );
};

export default NavBar;