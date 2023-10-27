import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import './pages.css'

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);
    let navbar = { "/store": "Store", "/mac": "Mac", "/ipad": "iPad", "/iphone": "iPhone", "/watch": "Watch",
                   "/airpods": "AirPods", "/tvandhome": "Tv & Home", "/entertainment": "Entertainment", "/accessories": "Accessories", 
                   "/support": "Support"
                 }

    let navbarArray = Object.entries(navbar).map(([key, val], index) => {
        //console.log("key is:", key);
        //console.log("Value is:", val);
            return<MDBNavbarItem key={key}>
            <Link to={key} className='nav_links px-4'>{val}</Link>
        </MDBNavbarItem>

    })
    return (
        <>
            <header>
                <MDBNavbar expand='lg' className='nav_body p-4'>
                    <MDBContainer fluid >
                        <MDBCollapse navbar show={showBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-center'>
                                <Link className='nav_font'><i class="fa-brands fa-apple px-4"></i></Link>
                                {navbarArray}
                                <Link className='nav_font'><i class="fa-solid fa-magnifying-glass px-4"></i></Link>
                                <Link className='nav_font'><i class="fa-solid fa-cart-shopping px-4"></i></Link>
                            </MDBNavbarNav>                            
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </header>
        </>
    );
};

export default Navbar;