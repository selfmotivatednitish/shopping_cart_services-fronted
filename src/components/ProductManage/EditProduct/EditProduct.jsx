import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import Product from '../EditProduct/Product/Product'
import { Col, Row } from 'react-bootstrap';
import base_url from '../../../api/bootapi';
import AuthContext from '../../Context/AuthProvider';

export default function EditProduct() {

	const {products, setProducts} = useContext(AuthContext)

	const fetchAllProducts = () => {
		axios.get(`${base_url}/products`)
			.then(
				(response) => {
					setProducts(response?.data)
				},
				(error) => {
					console.log(error);
					console.log("Failure")
				}
			)
	}

	useEffect(() => {
		fetchAllProducts()
	}, [])

	return (
		<Row className='justify-content-center m-0'>
			{products.map((product, index) => (
				<Col className='m-2' key={product.id}>
					<Product key={index} product={product} />
				</Col>
			))}
		</Row>
	)
}

