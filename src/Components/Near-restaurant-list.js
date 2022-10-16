import React, { useContext, useState } from 'react'
import { Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { NearRestaurant } from "../Data-Dummy/Near-restaurant";
import { LoginContext } from '../context/DataContext';
import Login from '../Pages/Login';


export const NearRestaurantList = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [dataLogin, dispatch] = useContext(LoginContext)

    function notLogin() {
        alert('Anda belum Login. \n\nSilahkan login terlebih dahulu untuk melihat detail Restoran!!!');
        setShowLogin(true);
        return (
            <Login show={showLogin} setShow={setShowLogin()} />
        )


    }

    return (
        <div style={{ backgroundColor: "#e5e5e5" }}>
            <Container>
                <div className="near-head pt-5">
                    <p className="fw-bold fs-1">Restaurant Near You</p>
                    <hr />
                </div>
                <div className="near-list pb-5 mt-4 d-md-flex flex-row flex-wrap gap-4 justify-content-lg-between justify-content-md-center">
                    {NearRestaurant.map((item, key) => {
                        return (
                            <Card className="near-item mt-3 mt-md-0 shadow" key={key}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title> {dataLogin.isLogin ? (<Link to="/DetailResto" className="text-black">{item.name}</Link>) : (<Link onClick={() => notLogin()} className="text-black">{item.name}</Link>)} </Card.Title>
                                    <Card.Text>
                                        {item.range}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </div>
    );
};