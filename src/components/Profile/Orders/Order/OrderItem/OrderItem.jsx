import axios from 'axios'
import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import base_url from '../../../../../api/bootapi'
import AuthContext from '../../../../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function OrderItem({ orderItem, orderId, count }) {

    const navigate = useNavigate()

    const { user, setProductId, setOrders } = useContext(AuthContext)

    const product = orderItem.product
    const image = "data:image/png;base64," + product.image

    const cancelOrderItemHandler = () => {
        if (count > 1) {
            axios.delete(`${base_url}/order/${user.id}/cancelOrderItem/${orderItem.id}`)
                .then(
                    (response) => {
                        setOrders(response?.data)
                        alert("Order item deleted successfully")
                    },
                    (error) => {
                        alert(error + "something went wrong")
                    }
                )
        }
        else {
            axios.delete(`${base_url}/order/${user.id}/cancelOrder/${orderId}`)
                .then(
                    (response) => {
                        setOrders(response?.data)
                        alert("cancel")
                    },
                    (error) => {
                        alert(error + "Something went wrong")
                    }
                )
        }
    }

    const productViewHandler = () => {
        setProductId(product.id)
        navigate("/product/view")
    }

    return (
        <>
            <Row>
                <Col md={2}>
                    <img onClick={productViewHandler} src={image} alt="" style={{ width: "100px", height: "100px", cursor: "pointer" }} />
                </Col>
                <Col md={8}>
                    <p className='text-start text-truncate'>
                        <small>{product.description}</small>
                    </p>
                    <Row>
                        <Col>
                            <p className='text-start'>
                                <b>Quantity: </b>
                                <span>{
                                    orderItem.quantity
                                }</span>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='btn-sm' variant="primary">Order Again</Button>
                </Col>
                <Col>
                    <Button className='btn-sm' onClick={cancelOrderItemHandler} variant='danger'>Cancel Item</Button>
                </Col>
            </Row>
            <hr />
        </>
    )
}
