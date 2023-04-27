import React, { useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap'
import AuthContext from '../../Context/AuthProvider'
import axios from 'axios';
import base_url from '../../../api/bootapi';

export default function UserDetails() {

    const { user, setUser } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [modUser, setModUser] = useState({
        id: user.id,
        name: user.name,
        email: user.email,
        password: "",
        phone: user.phone
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {

        const encodedText = encodeURIComponent(modUser.password);
        const base64Text = btoa(encodedText);

        let finalUser = {
            ...modUser,
            password: base64Text
        }

        axios.put(`${base_url}/user/update`, finalUser)
            .then(
                (response) => {
                    setUser(response?.data)
                    alert("user updated successfully")
                    handleClose()
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Login & Security</h3>
            <Row className='justify-content-center' >
                <Col md={8} >
                    <Table className='mt-5' bordered>
                        <tbody>
                            {/* name */}
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
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            {/* email */}
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
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            {/* phone number */}
                            <tr>
                                <td>
                                    <Table className='m-0 p-0'>
                                        <tbody>
                                            <tr md={9} >
                                                <td>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        <b>
                                                            Phone number:
                                                        </b>
                                                    </p>
                                                    <p className='text-start ps-3 pb-0 m-0'>
                                                        {user.phone}
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            {/* password */}
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
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className='justify-content-center' >
                <Col md={8}>
                    <span onClick={handleShow} className='btn btn-primary'>Edit Profile</span>
                </Col>
            </Row>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="nameText"
                                type="text"
                                value={modUser.name}
                                onChange={(e) => setModUser({ ...modUser, name: e.target.value })}
                                disabled
                            />
                            <label htmlFor="nameText">Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="emailText"
                                type="email"
                                value={modUser.email}
                                onChange={(e) => setModUser({ ...modUser, email: e.target.value })}
                                disabled
                            />
                            <label htmlFor="emailText">Email</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="phoneText"
                                type="text"
                                value={modUser.phone}
                                onChange={(e) => setModUser({ ...modUser, phone: e.target.value })}
                            />
                            <label htmlFor="phoneText">Phone</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="password"
                                type="text"
                                value={modUser.password}
                                onChange={(e) => setModUser({ ...modUser, password: e.target.value })}
                            />
                            <label htmlFor="password">Password</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
