import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Contactus() {
    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Contact Us</h3>
            <Row className='justify-content-center' >
                <Col md={8} >
                    <p className='text-start ps-3 pb-0 m-0'>
                        <b>
                            Name:
                        </b>
                        Nitish Kumar
                    </p>
                    <p className='text-start ps-3 pb-0 m-0'>
                        <b>Email: </b>nitish.k@beehyv.com
                    </p>
                    <p className='text-start ps-3 pb-0 m-0'>
                        <b>Phone: </b>6393644478
                    </p>
                </Col>
            </Row>
        </div>
    )
}
