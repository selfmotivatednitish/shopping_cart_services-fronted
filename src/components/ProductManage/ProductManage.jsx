import React, { useContext } from 'react'
import AddProduct from './AddProduct/AddProduct'
import EditProduct from './EditProduct/EditProduct'
import { Col, Row } from 'react-bootstrap'
import AuthContext from '../Context/AuthProvider'

export default function ProductManage() {

    const { user } = useContext(AuthContext)
    const role = user?.role?.name

    return (
        <>
            {
                role === "ADMIN" ? (
                    <div>
                        <h1 className="text-center my-2 border border-success border-5 bg-secondary bg-gradient">
                            Product Management System
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
                ) : (
                    <h1 className="text-center text-danger">
                        You have no access to this page
                    </h1>
                )
            }
        </>
    )
}
