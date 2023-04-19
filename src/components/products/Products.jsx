import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product from './Product/Product'


const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '45465' },
    { id: 2, name: 'MacBook', description: '', price: '5632' },
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '45465' },
    { id: 2, name: 'MacBook', description: '', price: '5632' },
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '45465' },
    { id: 2, name: 'MacBook', description: '', price: '5632' },
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '45465' },
    { id: 2, name: 'MacBook', description: '', price: '5632' },
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '45465' },
    { id: 2, name: 'MacBook', description: '', price: '5632' }
]

export default function Products() {
    return (
        <main>
            <Container>
                <Row className='justify-content-center'>
                    {products.map((product, index) => (
                        <Col className='m-2' key={product.id} xs='12' sm='6' md='4' lg='3'>
                            <Product key={index} product={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    )
}
