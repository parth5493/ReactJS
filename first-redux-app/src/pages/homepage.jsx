import React, { useEffect , useState} from 'react';
import { useDispatch } from 'react-redux'
import { retriveUsers } from '../actions/users'
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
console.log("HomePage Called");

const HomePage = () => {
    const dispatch = useDispatch()
    const [showBasic, setShowBasic] = useState(false);
    let navbar = { "/homepage": "Home", "/contactus": "Contact Us", "/aboutus": "About Us", "/slider": "Slider", "/api": "API Example" }
    //console.log(navbar);

    let navbarArray = Object.entries(navbar).map(([key, val], index) => {
        //console.log("key is:", key);
        //console.log("Value is:", val);
        return <MDBNavbarItem key={key}>
            <Link className="nav-link" to={key}>{val}</Link>
        </MDBNavbarItem>

    })

    useEffect(() => {
        console.log("useEffect from HomePage called");
        getUsers()
    })
    async function getUsers() {
        console.log("getUsers from HomePage Called");
        let abc = await dispatch
            (retriveUsers())
        console.log(abc);
    }
    return (
        <>           
            <div className="p-3 mb-2 bg-dark bg-gradient text-white">
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid >
                        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
                        <MDBCollapse navbar show={showBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                {navbarArray}
                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            Account
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link href='signin'>Login or Sign Up</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                            <form className='d-flex input-group w-auto'>
                                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                <MDBBtn color='primary'>Search</MDBBtn>
                            </form>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
            <Link to="accessapi">Access Data</Link>
        </>
    );
};

export default HomePage;