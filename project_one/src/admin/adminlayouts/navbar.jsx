import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App({togglesidebar,istogglesidebar}) {
  const [showNavSecond, setShowNavSecond] = useState(false);
  const [togglebutton, setToggleButton] = useState(true)

  return (
    
    <MDBNavbar expand='lg' light bgColor='light'>
      <div className="toggle_sidebar_icon">
          <i className={istogglesidebar ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={togglesidebar}></i>
      </div>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='#'>Features</MDBNavbarLink>
            <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}