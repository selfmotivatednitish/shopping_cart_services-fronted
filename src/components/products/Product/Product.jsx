import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AddShoppingCart } from '@mui/icons-material'

import './Style.css'
import axios from 'axios';
import base_url from '../../../api/bootapi';
import { toast } from 'react-toastify';


export default function Product({ product }) {
    const image = "data:image/png;base64," + product.image

    const addToCartHandle = () => {
        axios.get(`${base_url}/cart/2/add/${product.id}`)
            .then(
                (response) => {
                    console.log(response.data)
                    toast.success("Item added to cart successfully")
                },
                () => {
                    console.error("Something went wrong");
                }
            )
    }

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
                <Button onClick={addToCartHandle} variant="primary">
                    <AddShoppingCart />
                </Button>
            </Card.Body>
        </Card>
    )
}