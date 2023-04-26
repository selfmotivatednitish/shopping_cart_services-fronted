import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Style.css";

export default function Product({ product }) {
    const image = "data:image/png;base64," + product.image

    const editProductHandle = () => {

    }

    const deleteProductHandle = () => {

    }

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <div className="d-flex justify-content-between">
                    <Button onClick={editProductHandle} variant="primary">
                        Edit
                    </Button>
                    <Button onClick={deleteProductHandle} variant="danger">
                        Delete
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};