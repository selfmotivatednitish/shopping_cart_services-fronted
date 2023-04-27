import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import AuthContext from '../Context/AuthProvider'
import axios from 'axios'
import base_url from '../../api/bootapi'
import { useNavigate } from 'react-router-dom'
import Product from './Product/Product'

export default function ProductView() {

	const navigate = useNavigate()

	const { prouductId } = useContext(AuthContext)
	const [product, setProduct] = useState({})

	useEffect(() => {
		if (prouductId !== 0) {
			axios.get(`${base_url}/products/${prouductId}`)
				.then(
					(response) => {
						setProduct(response?.data)
					},
					(error) => {
						console.error(error)
					}
				)

		}
		else {
			navigate("/")
		}
	}, [prouductId])

	return (
		<Container>
			{
				product.image !== undefined ? (
					<Product product={product} />
				) : (
					<div></div>
				)
			}
		</Container>
	)
}
