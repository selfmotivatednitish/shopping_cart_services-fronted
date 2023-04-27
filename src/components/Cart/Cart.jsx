import axios from "axios";
import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthProvider";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import CartItem from "./CartItem/CartItem";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";

export default function Cart() {

	const { cart, cartItemCount, setCart, setOrder, auth, user, cartPrice } = useContext(AuthContext)

	useEffect(() => {
		if (auth) {
			axios.get(`${base_url}/cart/${user.id}/getCart`)
				.then(
					(response) => {
						setCart(response.data)
						toast.success("cart items loaded successfully")
					},
					() => {
						console.error("error")
						toast.success("Error in getting cart item")
					}
				)
		}
	}, [])

	const checkoutHandle = () => {
		if(auth) {
			axios.post(`${base_url}/order/${user.id}/checkout`)
			.then(
				(response) => {
					setCart([])
					setOrder(response?.data)
				},
				(error) => {
					alert(error + "something went wrong")
				}
			)
		}
	}

	return (
		<>
			{
				auth ? (
					cartItemCount === 0 ? (
						<h1 className="text-center">No Item in cart go to home to add some items</h1>
					) : (
						<div>
							<ToastContainer />
							<h1 className="text-center my-2 border border-success border-5 bg-secondary bg-gradient">
								Cart Page
							</h1>
							<Container>
								<Row className="justify-content-center text-center">
									<Col md={9}>
										{cart.map((cartItem, index) => (
											<CartItem key={index} cartItem={cartItem} />
										))}
									</Col>
									<Col md={3}>
										<div>
											<h4>
												Total price: Rs. {cartPrice}
											</h4>
											<span className="btn btn-primary" onClick={checkoutHandle}>
												Checkout
											</span>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					)
				) : (
					<h1 className="text-center">Please signin to continue ...</h1>
				)
			}
		</>
	);
}
