import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import base_url from '../../../api/bootapi'
import AuthContext from '../../Context/AuthProvider'

export default function Product({ product }) {
    const image = "data:image/png;base64," + product.image
    const [quantity, setQuantity] = useState(1)

    const { auth, user, cartItemCount, setCartItemCount } = useContext(AuthContext)

    const blockImageStyle = {
        height: "200px",
        width: "200px"
    }

    const selectedImageStyle = {
        height: "400px",
        width: "400px"
    }

    const incrProduct = () => setQuantity(quantity + 1)
    const decrProduct = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const addToCartHandler = () => {
        if (auth) {
            axios.get(`${base_url}/cart/${user.id}/add/${product.id}/${quantity}`)
                .then(
                    () => {
                        setCartItemCount(cartItemCount + quantity)
                    },
                    () => {
                        console.error("Something went wrong");
                    }
                );
        }
        else {
            alert("authentication fail.. Please login")
        }
    };

    return (
        <Row className='my-5 '>
            <Col md={6}>
                <div className="row border">
                    <div className="col-4 my-auto">
                        <div className="row border border">
                            <div className="col"><img src={image} alt={product.name} style={blockImageStyle} /></div>
                        </div>
                        <div className="row border">
                            <div className="col"><img src={image} alt={product.name} style={blockImageStyle} /></div>
                        </div>
                        <div className="row border">
                            <div className="col"><img src={image} alt={product.name} style={blockImageStyle} /></div>
                        </div>
                    </div>
                    <div className="col-8 my-auto">
                        <img src={image} alt={product.name} style={selectedImageStyle} />
                    </div>
                </div>
            </Col>
            <Col className='p-5'>
                <div className="row">
                    <h1><b>{product.name}</b></h1>
                </div>
                <div className="row">
                    <h3>Rs. {product.price}</h3>
                </div>
                <div className="row">
                    <h5>{product.description}</h5>
                </div>
                <div className="row">

                </div>
                <div className="row justify-content-center">
                    <div className="col-1">
                        <input
                            type="button"
                            value="-"
                            className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                            data-field="quantity"
                            onClick={decrProduct}
                        />
                    </div>
                    <div className="col-1">
                        <p>{quantity}</p>
                    </div>
                    <div className="col-1">
                        <input
                            type="button"
                            value="+"
                            className="button-plus border rounded-circle icon-shape icon-sm "
                            data-field="quantity"
                            onClick={incrProduct}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary rounded" onClick={addToCartHandler} type="button">Add to Cart</button>
                    <button className="btn btn-danger" type="button">Buy Now</button>
                </div>

            </Col>
        </Row>
    )
}
