import React, { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import GlobalButton from './Atoms/Global-button';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/DataContext';
import Image from '../Assets/Image/User/orang.png';
import * as Icon from "react-icons/fa";

function Header(alertLogout) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [dataLogin, dispatch] = useContext(LoginContext)
    // console.log(dataLogin.isLogin);


    function Logout() {
        dispatch({
            type: "LOGOUT",
            isLogin: false
        });
        alert('Anda berhasil Logout. \n\nTerima kasih telah berkujung!!!');
        setShowLogin(true);

    }

    return (
        <>
            <Navbar expand="lg" sticky="top" className="navbar">
                <Container>
                    <Navbar.Brand>
                        {dataLogin.isLogin ? (
                            <Link to="/Home"><img src='./image/icon.png' alt='Brand' /></Link>
                        ) : (
                            <Link to="/"><img src='./image/icon.png' alt='Brand' /></Link>

                        )}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end fw-bold'>
                        {dataLogin.isLogin ? (<Nav className="me-end">
                            {dataLogin.aslogin === "user" ? (
                                <div className="dropdown">
                                    <Icon.FaCartArrowDown className='fs-1 me-3' />
                                    <img src={Image} className="dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />
                                    <ul className="dropdown-menu" style={{ marginLeft: '-100px' }}>
                                        <li><Link className="dropdown-item" to="/Profile"><Icon.FaUserAlt className='me-2' /> Profile</Link></li>
                                        <li className='dropdown-item' onClick={() => Logout()} style={{ cursor: "pointer" }} ><Icon.FaSignOutAlt className='me-2' /> Logout</li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="dropdown">
                                    <Icon.FaCartArrowDown className='fs-1 me-3' />
                                    <img src={Image} className="dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />
                                    <ul className="dropdown-menu" style={{ marginLeft: '-100px' }}>
                                        <li><Link className="dropdown-item" to="/Profile"><Icon.FaUserAlt className='me-2' /> Profile Partner</Link></li>
                                        <li><Link className="dropdown-item" to="/AddProduct"><Icon.FaHamburger className='me-2' /> Add Product</Link> </li>
                                        <li className='dropdown-item' onClick={() => Logout()} style={{ cursor: "pointer" }} ><Icon.FaSignOutAlt className='me-2' /> Logout</li>
                                    </ul>
                                </div>
                            )}
                        </Nav>) : (<Nav className="me-end">
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
                        </Nav>)
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login show={showLogin} setShow={setShowLogin} setShowRegister={setShowRegister} />
            <Register show={showRegister} setShow={setShowRegister} setShowLogin={setShowLogin} />
        </>

    )
}

export default Header