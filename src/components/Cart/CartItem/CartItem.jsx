import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import AuthContext from '../../Context/AuthProvider'
import axios from 'axios'
import base_url from '../../../api/bootapi'
import { toast } from 'react-toastify'

export default function CartItem({ cartItem }) {

    const { user, auth, cart, setCart } = useContext(AuthContext)

    const product = cartItem.product
    const image = "data:image/png;base64," + product.image

    const removeCartItemHandler = () => {
        axios.delete(`${base_url}/cart/${user.id}/remove/${product.id}`)
            .then(
                (response) => {
                    console.log(response.data)
                    let newCart = cart.filter(c => c.product.id !== product.id)
                    setCart(newCart)
                    toast.warning("cart item removed successfully")
                },
                (error) => {
                    console.log(error)
                    toast.error("Some thing went wrong")
                }
            )
    }

    const buyNowHandler = () => {
        let order = {
            "quantity": cartItem.quantity,
            "product": {
                "id": product.id
            }
        }
        console.log(order)
        if (auth) {
            axios.post(`${base_url}/order/${user.id}/createOrder`, order)
                .then(
                    (response) => {
                        console.log(response.data)
                        toast.success("Item purchased ...")
                        removeCartItemHandler()
                    },
                    (error) => {
                        console.log(error)
                        toast.error("Some thing went wrong")
                    }
                )
        }
    }

    return (
        <Card className='m-3'>
            <Card.Body>
                <Row>
                    <Col md={2}>
                        <img src={image} alt="" style={{ width: "100px", height: "100px" }} />
                    </Col>
                    <Col md={8}>
                        <Card.Title className='text-start'>{cartItem.product.name}</Card.Title>
                        <p className='text-start text-truncate'>
                            <small>{product.description}</small>
                        </p>
                        <Row>
                            <Col>
                                <p className='text-start'>
                                    <b>Quantity: </b>
                                    <span>{
                                        cartItem.quantity
                                    }</span>
                                </p>
                            </Col>
                            <Col>
                                <p className='text-start'>
                                    <b>Price: </b>
                                    <span>{product.price}</span>
                                </p>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Button className='btn-sm' onClick={buyNowHandler} variant="primary">Buy Now</Button>
                        <hr />
                        <Button className='btn-sm' onClick={removeCartItemHandler} variant='danger'>Remove</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
