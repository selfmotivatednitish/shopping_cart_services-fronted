import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import AuthContext from '../../../Context/AuthProvider'
import axios from 'axios'
import base_url from '../../../../api/bootapi'
import OrderItem from './OrderItem/OrderItem'

export default function Order({ eventKey, order }) {

    const { user, setOrders } = useContext(AuthContext)
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const cancelOrderHandler = () => {
        axios.delete(`${base_url}/order/${user.id}/cancelOrder/${order.id}`)
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

    useEffect(() => {
        let cost = 0
        let quant = 0
        order.orderItems.forEach(ord => {
            quant += ord.quantity
            cost += ord.quantity * ord.product.price
        });

        setPrice(cost)
        setQuantity(quant)
    }, [order])

    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                <Row>
                    <Col>
                        <p className='mb-0'>
                            <small><b>OrderId:</b> {order.id}</small>
                        </p>
                    </Col>
                    <Col>
                        <p className="mb-0">
                            <small><b>Order Price:</b> {price}</small>
                        </p>
                    </Col>
                    <Col>
                        <p className="mb-0">
                            <small><b>Total Quantity:</b> {quantity}</small>
                        </p>
                    </Col>
                </Row>
            </Accordion.Header>
            <Accordion.Body>
                {
                    order.orderItems.map((orderItem, index) => (
                        <OrderItem key={index} orderItem={orderItem} orderId={order.id} count={order.orderItems.length}/>
                    ))
                }
                <Row>
                    <Col>
                        <Button className='btn-sm' onClick={cancelOrderHandler} variant='danger'>Cancel Order</Button>
                    </Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    )
}
