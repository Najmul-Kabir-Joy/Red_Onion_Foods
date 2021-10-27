import React from 'react';
import { Container, Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navlogo from '../../../Images/logo2.png';
import './Topbar.css';

const Topbar = () => {
    return (
        <div>
            <Navbar bg="light" sticky='top' expand="lg">
                <Container>
                    <Link to='/home'><Navbar.Brand href="#home"><img
                        alt="Red Onion Foods Logo"
                        src={navlogo}
                        width="80%"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='mx-3'>
                                <i className="fas fa-shopping-bag"></i>
                                <span>{ }</span>
                            </Nav.Link>
                            <Link to='/menu' style={{ textDecoration: 'none' }}><Nav.Link href="/menu" className='mx-3'>Menu</Nav.Link></Link>
                            <Link to='/login' style={{ textDecoration: 'none' }}><Nav.Link href="/login" className='mx-3'>Login</Nav.Link></Link>
                            <Link to='/signup' style={{ textDecoration: 'none' }}><Nav.Link className='signup-btn text-white bg-danger rounded-pill px-4' href="/signup">Signup</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Topbar;