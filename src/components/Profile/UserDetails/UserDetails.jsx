import React, { useContext } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import AuthContext from '../../Context/AuthProvider'

export default function UserDetails() {

    const { user } = useContext(AuthContext)

    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Login & Security</h3>
            <Row className='justify-content-center' >
                <Col md={8} >
                    <Table className='mt-5' bordered>
                        <tbody>
                            <tr>
                                <td>
                                    <Table className='m-0 p-0'>
                                        <tbody>
                                            <tr md={9} >
                                                <td>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        <b>
                                                            Name:
                                                        </b>
                                                    </p>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        {user.name}
                                                    </p>
                                                </td>
                                                <td className='align-middle justify-content-center'>
                                                    <Button variant="outline-warning">
                                                        Edit
                                                    </Button>{' '}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Table className='m-0 p-0'>
                                        <tbody>
                                            <tr md={9} >
                                                <td>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        <b>
                                                            E-mail Id:
                                                        </b>
                                                    </p>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        {user.email}
                                                    </p>
                                                </td>
                                                <td className='align-middle justify-content-center'>
                                                    <Button variant="outline-warning">
                                                        Edit
                                                    </Button>{' '}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Table className='m-0 p-0'>
                                        <tbody>
                                            <tr md={9} >
                                                <td>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        <b>
                                                            Mobile number:
                                                        </b>
                                                    </p>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        {user.phone}
                                                    </p>
                                                </td>
                                                <td className='align-middle justify-content-center'>
                                                    <Button variant="outline-warning">
                                                        Edit
                                                    </Button>{' '}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Table className='m-0 p-0'>
                                        <tbody>
                                            <tr md={9} >
                                                <td>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        <b>
                                                            Password:
                                                        </b>
                                                    </p>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        *********
                                                    </p>
                                                </td>
                                                <td className='align-middle justify-content-center'>
                                                    <Button variant="outline-warning">
                                                        Edit
                                                    </Button>{' '}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
