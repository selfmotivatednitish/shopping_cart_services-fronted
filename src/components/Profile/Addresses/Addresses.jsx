import React, { useContext, useState } from 'react'
import { Button, Card, Form, Modal, Row } from 'react-bootstrap'
import Address from './Address/Address'
import AuthContext from '../../Context/AuthProvider'
import axios from 'axios'
import base_url from '../../../api/bootapi'

export default function Addresses() {

    const { user, addresses, setAddresses } = useContext(AuthContext)

    const [newAddress, setNewaAddress] = useState({
        street: "",
        state: "",
        city: "",
        pincode: "",
        user: {
            id: user.id
        }
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        console.log(newAddress)
        axios.post(`${base_url}/user/${user.id}/addAddress`, newAddress)
            .then(
                (response) => {
                    setAddresses(response?.data)
                    alert("address updated successfully")
                    handleClose()
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    return (
        <div className='justify-content-center'>
            <h3 className='text-end'>Your Addresses</h3>
            <Row className='justify-content-center' >
                {
                    addresses.map((address, index) => (
                        <Address key={index} address={address} keyData={index} />
                    ))
                }
                <Card onClick={handleShow} className='m-2 text-start' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src="/addAddressIcon.png" />
                        <Card.Title className="m-0 mt-3 text-center">Add new address</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Address</Modal.Title>
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
                    <Button variant="primary" onClick={handleSave}>
                        Add Address
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
