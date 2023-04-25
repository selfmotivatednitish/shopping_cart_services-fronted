import React from 'react'
import { Accordion, Button, Col, Row } from 'react-bootstrap'

export default function Order({ eventKey, order }) {

    const orderItem = order.orderItems[0]
    const product = orderItem.product
    const image = "data:image/png;base64," + product.image

    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                <Row>
                    <Col>
                        <p className='mb-0'>
                            <b>
                                <small>{product.name}</small>
                            </b>
                        </p>
                        <p className='mb-0 text-info'>
                            <small>{orderItem.orderStatus}</small>
                        </p>
                    </Col>
                    <Col>
                        <p className='mb-0'>
                            <b>
                                <small>Total</small>
                            </b>
                        </p>
                        <p className='mb-0'>
                            <small>{orderItem.quantity * product.price}</small>
                        </p>
                    </Col>
                    <Col>
                        <p className='mb-0'>
                            <small><b>OrderId:</b> {order.id}</small>
                        </p>
                    </Col>
                </Row>
            </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col md={2}>
                        <img src={image} alt="" style={{ width: "100px", height: "100px" }} />
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
                        <Button className='btn-sm' variant='danger'>Cancel Order</Button>
                    </Col>
                </Row>
            </Accordion.Body>

        </Accordion.Item>
    )
}
