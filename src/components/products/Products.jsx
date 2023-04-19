import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from './Product/Product'
import axios from 'axios'
import base_url from '../../api/bootapi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Products() {

    const [productItems, setProductItems] = useState([])

    useEffect(() => {
        document.title = "All Products"
        getAllProductFromDb()
    }, [])

    const getAllProductFromDb = () => {
        axios.get(`${base_url}/products`)
            .then(
                (response) => {
                    setProductItems(response.data)
                    console.log("Success")
                    toast.success("All product loaded successfully ...")
                },
                (error) => {
                    console.log(error)
                    console.log('Failure')
                    toast.error("Something went wrong ...")
                }
            )
    }

    return (
        <main>
            <Row className='justify-content-center'>
                {productItems.map((product, index) => (
                    <Col className='m-2' key={product.id} xs='12' sm='6' md='4' lg='3'>
                        <Product key={index} product={product} />
                    </Col>
                ))}
            </Row>
            <ToastContainer />
        </main>
    )
}
