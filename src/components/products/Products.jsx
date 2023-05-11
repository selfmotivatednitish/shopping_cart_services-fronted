import React, { useContext, useState } from 'react'
import { Row, Col, Carousel, Button, Offcanvas } from 'react-bootstrap'
import Product from './Product/Product'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from '../Context/AuthProvider'

export default function Products() {

    const { search, products } = useContext(AuthContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productItems = products

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
            {/* <Row className='d-flex pt-3 ps-5 justify-content-start'>
                <Col md={2}>
                    <Button variant="primary" onClick={handleShow}>
                        Use Filter
                    </Button>
                </Col>
            </Row> */}
            {
                products !== [] ? (
                    <Row className='justify-content-center ps-5 ms-5'>
                        {productItems.map((product, index) => (
                            <Col className='m-2' key={product.id} xs={8} sm='6' md='4' lg='3'>
                                <Product key={index} product={product} />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <h1>Product has been not listed yet</h1>
                )
            }
            <Offcanvas
                show={show}
                onHide={handleClose}
                backdrop="static"
                scroll={true}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Choose Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <b></b>
                </Offcanvas.Body>
            </Offcanvas>
        </main>
    )
}
