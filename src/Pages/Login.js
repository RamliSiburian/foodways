import React, { useContext, useState } from 'react'
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GlobalButton from '../Components/Atoms/Global-button';
import GlobalForm from '../Components/Atoms/Global-form';
import { LoginContext } from '../context/DataContext';
import { Users } from '../Data-Dummy/Users';


function Login({ show, setShow, setShowRegister }) {
    const handleClose = () => setShow(false)

    const [isLogin, setIsLogin] = useState(false)

    const [dataLogin, dispatch] = useContext(LoginContext);



    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const handleOnChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        });
        // console.log(form);
    }
    const navigate = useNavigate()

    const HandleOnSubmit = (e) => {
        e.preventDefault()

        const DataUser = Users.find((person) => person.email === form.email)
        console.log(DataUser);
        if (DataUser) {
            if (form.email === DataUser.email && DataUser.aslogin === "partner" && form.password === DataUser.password) {
                dispatch({
                    type: "SUCCESS",
                    isLogin: true,
                    dataName: form
                });
                setShow(false);
                return navigate("/Admin");
                // console.log(dataLogin);

            } else if (form.email === DataUser.email && DataUser.aslogin === "user" && form.password === DataUser.password) {
                dispatch({
                    type: "SUCCESS",
                    isLogin: true,
                    dataName: form
                });
                setShow(false);
                return navigate("/App")

                // console.log(dataLogin);

            } else {
                return alert("Email atau Passwor salah!!")
            }
        } else {
            return alert('User tidak ditemukan');

        }

    }

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title className='modal-title fs-1 fw-bold'>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={HandleOnSubmit}>
                        <Form.Group className='mb-3'>
                            <GlobalForm
                                type='text'
                                name='email'
                                onChange={handleOnChange}
                                value={form.email}
                                placeholder='Email'
                                required='required'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <GlobalForm
                                type='password'
                                name='password'
                                onChange={handleOnChange}
                                value={form.password}
                                placeholder='Password'
                                required='required'
                            />
                        </Form.Group>
                        <Form.Group className=''>
                            <GlobalButton
                                name='Login'
                                type='submit'
                                className='btn link border-0 w-100 mt-2'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='text-center'>
                    <p>
                        Don't have an account ? click
                        <span
                            className='ms-1 fw-bold'
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setShow(false);
                                setShowRegister(true);
                            }}
                        >
                            Here
                        </span>
                    </p>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Login;