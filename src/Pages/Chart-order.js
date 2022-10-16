import React, { useContext, useState } from 'react';
import '../Assets/styles/style.css';
import { Button, Container } from 'react-bootstrap';
import ItemImage from '../Assets/Image/Detail-restaurant/geprek.png';
import * as Icon from 'react-icons/fa';
import { CounterContext } from '../context/Data-counter';
import { Chart } from '../context/Charts';

function ChartOrder() {
    const [dataCounter, setDataCounter] = useContext(CounterContext);
    console.log(dataCounter.counter.length);
    // console.log(dataCounter.counter.length);
    // console.log(dataCounter);

    function AddUser(item) {
        let newData = dataCounter.counter;
        newData.push({ ...item });
        setDataCounter({
            type: "ADD",
            valCounter: newData,
        })
        // console.log(dataCounter);

    }

    function LessUser() {
        let newData = dataCounter.counter;
        newData.splice(0, 1);
        setDataCounter({
            type: "LESS",
            valCounter: newData,
        })

    }




    return (
        <>
            <Container >
                <div className="chart-order">
                    <p className='fw-bold fs-3'>Geprek Bensu</p>

                    <hr />
                    <p className='fw-bold fs-6 mb-3'>Review Your Order</p>
                    <div className="chart d-md-flex gap-5">
                        <div className="chart-item w-100">
                            <div className="charts items d-md-flex gap-3 align-items-center">
                                <div className="image">
                                    <img src={ItemImage} alt="geprek" width="150px" className='rounded' />
                                </div>
                                <div className="detail">
                                    <p>Paket Geprek</p>
                                    <p>
                                        <span><Icon.FaMinus onClick={() => LessUser()}></Icon.FaMinus> </span>
                                        <span> cek </span>
                                        <span><Icon.FaPlus onClick={() => AddUser()}></Icon.FaPlus> </span>
                                    </p>
                                </div>
                                <div className="temporary-price">
                                    <p className='text-danger'>Rp 15.000</p>
                                </div>
                            </div>
                            <div className="charts items d-md-flex gap-3 align-items-center">
                                <div className="image">
                                    <img src={ItemImage} alt="geprek" width="150px" className='rounded' />
                                </div>
                                <div className="detail">
                                    <p>Paket Geprek</p>
                                    <p>
                                        <span><Icon.FaMinus></Icon.FaMinus> </span>
                                        <span> NumberOfChart </span>
                                        <span><Icon.FaPlus></Icon.FaPlus> </span>
                                    </p>
                                </div>
                                <div className="temporary-price">
                                    <p className='text-danger'>Rp 15.000</p>
                                </div>
                            </div>
                            <div className="charts items d-md-flex gap-3 align-items-center">
                                <div className="image">
                                    <img src={ItemImage} alt="geprek" width="150px" className='rounded' />
                                </div>
                                <div className="detail">
                                    <p>Paket Geprek</p>
                                    <p>
                                        <span><Icon.FaMinus></Icon.FaMinus> </span>
                                        <span> NumberOfChart </span>
                                        <span><Icon.FaPlus></Icon.FaPlus> </span>
                                    </p>
                                </div>
                                <div className="temporary-price">
                                    <p className='text-danger'>Rp 15.000</p>
                                </div>
                            </div>
                            <div className="charts items d-md-flex gap-3 align-items-center">
                                <div className="image">
                                    <img src={ItemImage} alt="geprek" width="150px" className='rounded' />
                                </div>
                                <div className="detail">
                                    <p>Paket Geprek</p>
                                    <p>
                                        <span><Icon.FaMinus></Icon.FaMinus> </span>
                                        <span> NumberOfChart </span>
                                        <span><Icon.FaPlus></Icon.FaPlus> </span>
                                    </p>
                                </div>
                                <div className="temporary-price">
                                    <p className='text-danger'>Rp 15.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="chart-price w-100">
                            <div className="charts ">
                                <div className="sub-total priceses">
                                    <p>Sub Total</p>
                                    <p className='text-danger'>Rp 15.000</p>
                                </div>
                                <div className="qty priceses">
                                    <p>Qty</p>
                                    <p>1</p>
                                </div>
                                <div className="ongkir priceses">
                                    <p>Ongkir</p>
                                    <p className='text-danger'>Rp 10.000</p>
                                </div>
                            </div>
                            <div className="total priceses mt-3" >
                                <p>Total</p>
                                <p className='text-danger'>Rp 25.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-md-flex justify-content-md-end mt-5 justify-content-center">
                        <Button style={{ backgroundColor: "#433434", width: "200px" }} className="border-0">
                            Save
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ChartOrder;