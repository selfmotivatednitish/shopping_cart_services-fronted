import React from 'react'
import AddProduct from './AddProduct/AddProduct'
import EditProduct from './EditProduct/EditProduct'
import { Col, Container, Row } from 'react-bootstrap'

export default function ProductManage() {
    return (
        <div>
            <h1 className="text-center my-2 border border-success border-5 bg-secondary bg-gradient">
                Profile Page
            </h1>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={6}>
                        <AddProduct />
                    </Col>
                    <Col md={6}>
                        <EditProduct />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
