import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AddShoppingCart } from '@mui/icons-material'

import './Style.css'


export default function Product({ product }) {
    const image = "data:image/png;base64," + product.image
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary">
                    <AddShoppingCart />
                </Button>
            </Card.Body>
        </Card>
    )
}