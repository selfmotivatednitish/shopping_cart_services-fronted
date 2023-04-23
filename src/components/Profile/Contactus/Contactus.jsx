import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'

export default function Contactus() {
    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Contact Us</h3>
            <Row className='justify-content-center' >
                <Col md={8} >
                    <Table className='mt-5' bordered>
                        <tbody>
                            <tr>
                                <td>
                                    <p className='text-start ps-3 pb-0 m-0'>
                                        <b>
                                            Name:
                                        </b>
                                    </p>
                                    <p className='text-start ps-3 pb-0 m-0'>
                                        Nitish Kumar
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
