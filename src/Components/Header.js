import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import GlobalButton from './Atoms/Global-button';
import { Link } from 'react-router-dom';

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    return (
        <>
            <Navbar expand="lg" sticky="top" className="navbar">
                <Container>
                    <Navbar.Brand><Link to="/"><img src='./image/icon.png' alt='Brand' /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="me-end">
                            <GlobalButton
                                name='Register'
                                className='link btn text-white me-3 border-0 mb-3 mb-lg-0'
                                onClick={() => setShowRegister(true)}
                            />
                            <GlobalButton
                                name='Login'
                                className='link btn text-white border-0'
                                onClick={() => setShowLogin(true)}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login show={showLogin} setShow={setShowLogin} setShowRegister={setShowRegister} />
            <Register show={showRegister} setShow={setShowRegister} setShowLogin={setShowLogin} />
        </>

    )
}

export default Header