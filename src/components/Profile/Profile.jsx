import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menus from "./Menus/Menus";
import UserDetails from "./UserDetails/UserDetails";
import Addresses from "./Addresses/Addresses";
import Orders from "./Orders/Orders";
import Contactus from "./Contactus/Contactus";
import AuthContext from "../Context/AuthProvider";

export default function Profile({ value }) {
    const { auth } = useContext(AuthContext);

    return (
        <>
            {auth ? (
                <div>
                    <h1 className="text-center my-2 border border-success border-5 bg-secondary bg-gradient">
                        Profile Page
                    </h1>
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col md={3}>
                                <Menus value={value} />
                            </Col>
                            <Col md={9}>
                                <div style={{ display: value === "login" ? "block" : "none" }}>
                                    <UserDetails />
                                </div>
                                <div
                                    style={{ display: value === "addresses" ? "block" : "none" }}
                                >
                                    <Addresses />
                                </div>
                                <div style={{ display: value === "orders" ? "block" : "none" }}>
                                    <Orders />
                                </div>
                                <div
                                    style={{ display: value === "contactus" ? "block" : "none" }}
                                >
                                    <Contactus />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : (
                <section>
                    <h1>Redirecting to signin page</h1>
                </section>
            )}
        </>
    );
}
