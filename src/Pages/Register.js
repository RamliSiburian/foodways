import React from 'react'
import { Form, Modal } from 'react-bootstrap';
import GlobalButton from '../Components/Atoms/Global-button';

function Register({ show, setShow, setShowLogin }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-1 fw-bold'>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type='text'
                                name='email'
                                placeholder='Email'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type='password'
                                name='password'
                                placeholder='Password'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type='text'
                                name='fullName'
                                placeholder='Full Name'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type='text'
                                name='gender'
                                placeholder='Gender'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type='text'
                                name='phone'
                                placeholder='Phone'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Select aria-label="Default select example">
                                <option value="User">As User</option>
                                <option value="Partner">As Partner</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <GlobalButton
                        name='Register'
                        className='btn link w-100 text-white border-0'
                    />
                </Modal.Footer>
                <p className='text-center'>
                    Alredy have an account ? click
                    <span
                        className='ms-1 fw-bold'
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setShow(false);
                            setShowLogin(true);
                        }}
                    >
                        Here
                    </span>
                </p>
            </Modal>
        </>
    );
}

export default Register