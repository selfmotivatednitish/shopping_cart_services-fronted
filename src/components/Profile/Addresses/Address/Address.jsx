import React, { useContext, useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import AuthContext from '../../../Context/AuthProvider'
import axios from 'axios';
import base_url from '../../../../api/bootapi';

export default function Address({ address }) {
    const { user, setAddresses } = useContext(AuthContext)

    const [show, setShow] = useState(false);

    const [newAddress, setNewaAddress] = useState({ ...address, user: { id: user.id } })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        console.log(newAddress)
        axios.post(`${base_url}/user/${user.id}/addAddress`, newAddress)
            .then(
                (response) => {
                    console.log(newAddress)
                    setAddresses(response?.data)
                    alert("address updated successfully")
                    handleClose()
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    const deleteAddress = () => {
        axios.delete(`${base_url}/user/${user.id}/removeAddress/${address.id}`)
            .then(
                (response) => {
                    setAddresses(response?.data)
                    alert("address deleted successfully")
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <Card className='m-2 text-start' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                {address.id}
                <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
                <Card.Text>
                    {address.street}, {address.city}, {address.state}
                </Card.Text>
                <Card.Text>
                    {address.pincode}
                </Card.Text>
                <Card.Link onClick={handleShow} >Edit</Card.Link>
                <Card.Link onClick={deleteAddress} >Remove</Card.Link>
            </Card.Body>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="streetText"
                                type="text"
                                value={newAddress.street}
                                onChange={(e) => setNewaAddress({ ...newAddress, street: e.target.value })}
                            />
                            <label htmlFor="streetText">Street</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="stateText"
                                type="text"
                                value={newAddress.state}
                                onChange={(e) => setNewaAddress({ ...newAddress, state: e.target.value })}
                            />
                            <label htmlFor="stateText">State</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="cityText"
                                type="text"
                                value={newAddress.city}
                                onChange={(e) => setNewaAddress({ ...newAddress, city: e.target.value })}
                            />
                            <label htmlFor="cityText">City</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                size='sm'
                                id="pincode"
                                type="number"
                                value={newAddress.pincode}
                                onChange={(e) => setNewaAddress({ ...newAddress, pincode: e.target.value })}
                            />
                            <label htmlFor="pincode">Pincode</label>
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
        </Card>
    )
}
