import React from 'react'
import AddProduct from './AddProduct/AddProduct'
import EditProduct from './EditProduct/EditProduct'
import { Col, Container, Row } from 'react-bootstrap'

export default function ProductManage() {
    return (
        <div>
            <h1 className="text-center my-2 border border-success border-5 bg-secondary bg-gradient">
                Add Product Page
            </h1>
            <Row className="justify-content-center m-0 text-center">
                <Col className='ps-5' md={4}>
                    <AddProduct />
                </Col>
                <Col md={8}>
                    <EditProduct />
                </Col>
            </Row>
        </div>
    )
}
