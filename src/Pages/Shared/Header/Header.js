import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
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
                            <NavLink as={HashLink} to="/dashboard"> Dashboard</NavLink>
                        </Nav>

                        {/* {user.email && <span >{user.displayName}</span>}
                        {
                            user.email ?

                                <NavLink onClick={logOut} className="btn  btn-lg">
                                    <span className="glyphicon glyphicon-log-out"></span> <i class="fas fa-sign-out-alt"></i> Log out
                                </NavLink>
                                :
                                <NavLink className="btn  btn-lg" href="/login"> <i class="fas fa-sign-in-alt"></i> Login</NavLink>} */}
                        <NavLink className="btn  btn-lg" href="/login"> <i class="fas fa-sign-in-alt"></i> Login</NavLink>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;