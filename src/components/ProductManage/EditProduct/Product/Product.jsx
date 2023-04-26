import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Style.css";
import axios from "axios";
import base_url from "../../../../api/bootapi";
import { Col, Form, Modal, Row } from "react-bootstrap";

export default function Product({ product }) {
    const image = "data:image/png;base64," + product.image

    const [show, setShow] = useState(false);

    const [modProduct, setModProduct] = useState({
        id: product.id,
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        category: product.category,
        subCategory: product.subcategory
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const imageChangeHandle = (event) => {
        const choosedFile = event.target.files[0];

        if (choosedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(choosedFile)
            reader.onload = () => {
                const base64String = reader.result
                    .replace('data:', '')
                    .replace(/^.+,/, '')

                setModProduct({ ...modProduct, image: base64String })
            }
        }
    }

    const editProductHandle = () => {
        axios.put(`${base_url}/products/update`, modProduct)
            .then(
                () => {
                    handleClose()
                    alert("Product Updated Successfully...")
                    window.location.reload(true)
                },
                (error) => {
                    alert(error + "something went wrong")
                }
            )
    }

    const deleteProductHandle = () => {
        axios.delete(`${base_url}/products/getById/${product.id}`)
            .then(
                () => {
                    alert("product deleted successfully")
                    window.location.reload(true)
                },
                () => {
                    alert("something went wrong")
                }
            )
    }

    return (
        <>
            <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-truncate">{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text className="text-truncate">{product.description}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button onClick={handleShow} variant="primary">
                            Edit
                        </Button>
                        <Button onClick={deleteProductHandle} variant="danger">
                            Delete
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal
                size="xl"
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Proudct</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='container'>
                        <Row className='justify-content-center' >
                            <Col>
                                {/* name input*/}
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="name">Name: </Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                id="name"
                                                value={modProduct.name}
                                                onChange={(e) => setModProduct({ ...modProduct, name: e.target.value })}
                                                aria-describedby="nameHelpBlock"
                                            />
                                            <Form.Text id="nameHelpBlock" muted>

                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* description input */}
                                <Row className='justify-content-center' >
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Description: </Form.Label>
                                            <Form.Control
                                                required
                                                as="textarea"
                                                value={modProduct.description}
                                                rows={3}
                                                maxLength={200}
                                                onChange={(e) => setModProduct({ ...modProduct, description: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* price */}
                                <Row className='justify-content-center' >
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="price">Price: </Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                id="image"
                                                value={modProduct.price}
                                                onChange={(e) => setModProduct({ ...modProduct, price: e.target.value })}
                                                aria-describedby="imageHelpBlock"
                                            />
                                            <Form.Text id="imageHelpBlock" muted>

                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                {/* image input */}
                                <Row className='justify-content-center' >
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="image">Image: </Form.Label>
                                        <Form.Control
                                            required
                                            type="file"
                                            id="image"
                                            accept='image/*'
                                            onChange={(e) => imageChangeHandle(e)}
                                            aria-describedby="imageHelpBlock"
                                        />
                                        <Form.Text id="imageHelpBlock" muted>

                                        </Form.Text>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <img src={"data:image/png;base64," + modProduct.image} alt={modProduct.name} />
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editProductHandle}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};