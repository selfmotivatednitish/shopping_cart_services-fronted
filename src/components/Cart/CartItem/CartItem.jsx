import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import AuthContext from '../../Context/AuthProvider'
import axios from 'axios'
import base_url from '../../../api/bootapi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function CartItem({ cartItem }) {

    const navigate = useNavigate()

    const { user, setProductId, auth, cart, setCart } = useContext(AuthContext)

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

    const modCartItem = (action) => {
        console.log(action)
        if (auth) {
            if (cartItem.quantity === 1 && action === "decrquant") {
                removeCartItemHandler()
            }
            else {
                axios.put(`${base_url}/cart/cartItem/${cartItem.id}/${action}`)
                    .then(
                        (response) => {
                            setCart(response?.data)
                            console.log("success")
                        },
                        (error) => {
                            console.log(error)
                        }
                    )
            }
        }
    }

    const productViewHandler = () => {
        setProductId(product.id)
        navigate("/product/view")
    }

    return (
        <Card className='m-3'>
            <Card.Body>
                <Row>
                    <Col onClick={productViewHandler} md={2} style={{ cursor: "pointer" }}>
                        <img src={image} alt="" style={{ width: "100px", height: "100px" }} />
                    </Col>
                    <Col md={8}>
                        <Card.Title onClick={productViewHandler} className='text-start' style={{ cursor: "pointer" }}>{cartItem.product.name}</Card.Title>
                        <p className='text-start text-truncate'>
                            <small>{product.description}</small>
                        </p>
                        <Row>
                            <Col>
                                <p className='text-start mb-0'>
                                    <b>Quantity: </b>
                                    <span>{
                                        cartItem.quantity
                                    }</span>
                                </p>
                                <div className="input-group w-auto align-items-center">
                                    <input
                                        type="button"
                                        value="-"
                                        className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                        data-field="quantity"
                                        onClick={() => modCartItem("decrquant")}
                                    />
                                    <input
                                        type="number"
                                        disabled step="1"
                                        max="10"
                                        value={cartItem.quantity}
                                        name="quantity"
                                        className="quantity-field border-0 text-center w-25"
                                    />
                                    <input
                                        type="button"
                                        value="+"
                                        className="button-plus border rounded-circle icon-shape icon-sm "
                                        data-field="quantity"
                                        onClick={() => modCartItem("incrquant")}
                                    />
                                </div>
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
            </Card.Body >
        </Card >
    )
}
