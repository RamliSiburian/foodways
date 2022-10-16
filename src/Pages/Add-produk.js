import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import GlobalForm from '../Components/Atoms/Global-form';
import * as Icon from 'react-icons/fa';

function AddProduk() {
    return (
        <>
            <Container>
                <div className="add-produk mt-5">
                    <p className='fs-3 fw-bold'>Add Produk</p>
                    <hr />
                    <Form>
                        <Form.Group className="mb-3 d-md-flex gap-3" controlId="formBasicEmail">
                            <GlobalForm
                                type='text'
                                name='title'
                                placeholder='Title'
                                disabled
                            />
                            <button className="btn text-white mt-3 mt-md-0 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#433434" }}>Attach Image <Icon.FaPaperclip /></button>
                        </Form.Group>
                        <Form.Group className="mb-3 border-2" controlId="formBasicPassword">
                            <GlobalForm
                                type='text'
                                name='price'
                                placeholder='Price'
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className='mt-5 d-flex justify-content-md-end justify-content-center'>
                            <Button style={{ backgroundColor: "#433434", width: "200px" }} className="border-0">
                                Save
                            </Button>
                        </Form.Group>
                    </Form>

                </div>
            </Container>
        </>
    )
}

export default AddProduk;