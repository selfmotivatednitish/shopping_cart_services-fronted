import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'

export default function Order({ eventKey }) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                <Row>
                    <Col md={4}>
                        <p className='mb-0'>
                            <small>Order Placed</small>
                        </p>
                        <p className='mb-0'>
                            <small>20 April 2023</small>
                        </p>
                    </Col>
                    <Col md={4}>
                        <p className='mb-0'>
                            <small>Total</small>
                        </p>
                        <p className='mb-0'>
                            <small>Rs. 89642.00</small>
                        </p>
                    </Col>
                    <Col>
                        <p className='mb-0'>
                            <small>Order Id: 564646546</small>
                        </p>
                    </Col>
                </Row>
            </Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
            
        </Accordion.Item>
    )
}
