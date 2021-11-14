
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" className="container">
                <Container fluid>
                    <Navbar.Brand as={HashLink} to="/home#home" >   <h5>MotorMania</h5></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home#home"> Home</Nav.Link>

                        </Nav>
                        {user?.email && <span >{user.displayName}</span>}
                        {
                            user?.email ?
                                <Nav>
                                    <NavLink as={HashLink} to="/dashboard"> Dashboard</NavLink>
                                    <NavLink onClick={logOut} className="btn  btn-lg">
                                        <span ></span> <i class="fas fa-sign-out-alt"></i> Log out
                                    </NavLink>
                                </Nav>
                                :
                                <NavLink className="btn  btn-lg" href="/login"> <i class="fas fa-sign-in-alt"></i> Login</NavLink>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;