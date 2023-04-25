import React, { useContext } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from './Product/Product'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from '../Context/AuthProvider'

export default function Products() {

    const { search, products } = useContext(AuthContext)

    const productItems = products;

    return (
        <main>
            <Carousel style={{ display: search ? "none" : "block" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-taobao-vector-creative-technology-online-shopping-illustration-computer-finger-poster-image_131803.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-happy-shopping-light-spot-poster-background-image_122448.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-taobao-vector-creative-technology-online-shopping-illustration-computer-finger-poster-image_131803.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row className='justify-content-center'>
                {productItems.map((product, index) => (
                    <Col className='m-2' key={product.id} xs='12' sm='6' md='4' lg='3'>
                        <Product key={index} product={product} />
                    </Col>
                ))}
            </Row>
        </main>
    )
}
