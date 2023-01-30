import React, {useState} from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav
} from 'mdb-react-ui-kit';

import { LinkContainer } from 'react-router-bootstrap';
import './Nav.css'

const Nav = () => {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  return (
    <>
    <MDBNavbar expand='lg' dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarToggler type='button'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}>
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoToggler}>
        <MDBNavbarNav>
          <LinkContainer to="/">
            <MDBNavbarBrand href="#home">Sue Banasihan</MDBNavbarBrand>
          </LinkContainer>
              <LinkContainer to="/about">
                <MDBNavbarItem>
                <MDBNavbarLink href="#about">About</MDBNavbarLink>
                </MDBNavbarItem>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <MDBNavbarItem>
                <MDBNavbarLink href="#portfolio">Portfolio</MDBNavbarLink>
                </MDBNavbarItem>
              </LinkContainer>
              <LinkContainer to="/resume">
                <MDBNavbarItem>
                <MDBNavbarLink href="#resume">Resume</MDBNavbarLink>
                </MDBNavbarItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <MDBNavbarItem>
                <MDBNavbarLink href="#contact">Contact</MDBNavbarLink>
                </MDBNavbarItem>
              </LinkContainer>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}

export default Nav;