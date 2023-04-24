import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import AuthContext from '../../Context/AuthProvider'

export default function CartItem({ cartItem }) {

    const product = cartItem.product
    const image = "data:image/png;base64," + product.image

    return (
        <Card className='m-3'>
            <Card.Body>
                <Row>
                    <Col md={2}>
                        <img src={image} alt="" style={{ width: "100px", height: "100px" }} />
                    </Col>
                    <Col md={8}>
                        <Card.Title className='text-start'>{cartItem.product.name}</Card.Title>
                        <p className='text-start text-truncate'>
                            <small>{product.description}</small>
                        </p>
                        <Row>
                            <Col>
                                <p className='text-start'>
                                    <b>Quantity: </b>
                                    <span>{
                                        cartItem.quantity
                                    }</span>
                                </p>
                            </Col>
                            <Col>
                                <p className='text-start'>
                                    <b>Price: </b>
                                    <span>{product.price}</span>
                                </p>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Button className='btn-sm' variant="primary">Buy Now</Button>
                        <hr />
                        <Button className='btn-sm' variant='danger'>Remove</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
