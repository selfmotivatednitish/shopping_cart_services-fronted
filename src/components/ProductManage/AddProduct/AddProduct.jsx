import React, { useEffect, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import base_url from '../../../api/bootapi'
import axios from 'axios'

const product = [
    {
        "category": "electronics",
        "subCategory": ["computers", "smartphones", "tablets", "televisions", "headphones"]
    },
    {
        "category": "clothing",
        "subCategory": ["men's clothing", "women's clothing", "children's clothing", "shoes", "accessories"]
    },
    {
        "category": "books",
        "subCategory": ["fiction", "non-fiction", "children's books", "cookbooks", "self-help"]
    },
    {
        "category": "sports",
        "subCategory": ["fitness equipment", "athletic wear", "outdoor gear", "sports nutrition"]
    },
    {
        "category": "phones_accessories",
        "subCategory": ["phone cases", "chargers", "screen protectors", "headphones", "smart watches"]
    },
    {
        "category": "toys",
        "subCategory": ["action figures", "dolls", "puzzles", "board games", "outdoor toys"]
    }
]

export default function AddProduct() {

    const [productItem, setProductItem] = useState({})

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [subCategories, setSubCategories] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {
        let categories = []
        product.forEach(pd => {
            categories.push(pd.category);
        });

        console.log(categories)
        setCategories(categories);
        document.title = "Add Product"
    }, [])

    useEffect(() => {
        let subCategories = [];
        product.forEach((pd) => {
            if (pd.category === category) {
                subCategories = pd.subCategory
            }
        })
        console.log(subCategories)
        setSubCategories(subCategories)
        setSubCategory(subCategories[0])
        setProductItem({ ...productItem, category: category })
    }, [category])

    useEffect(() => {
        setProductItem({ ...productItem, subcategory: subCategory })
    }, [subCategory])

    const imageChangeHandle = (event) => {
        const choosedFile = event.target.files[0];

        if (choosedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(choosedFile)
            reader.onload = () => {
                const base64String = reader.result
                    .replace('data:', '')
                    .replace(/^.+,/, '')

                setProductItem({ ...productItem, image: base64String })
            }
        }
    }

    // product form submit handler
    const submitHandler = () => {

        postProductToDb(productItem)
    }

    const postProductToDb = (productItem) => {
        axios.post(`${base_url}/products/addProduct`, productItem)
            .then(
                (response) => {
                    console.log(response)
                    console.log("success")
                },
                (error) => {
                    console.log(error)
                    console.log("error")
                }
            )
    }

    return (
        <Form onSubmit={submitHandler} className='container'>
            <h1 className="text-center">Add a Product</h1>
            <hr />
            {/* name input*/}
            <Row className='justify-content-center' >
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Name: </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="name"
                            onChange={(e) => setProductItem({ ...productItem, name: e.target.value })}
                            aria-describedby="nameHelpBlock"
                        />
                        <Form.Text id="nameHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            {/* image input */}
            <Row className='justify-content-center' >
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="image">Image: </Form.Label>
                        <Form.Control
                            required
                            type="file"
                            id="image"
                            accept='image/*'
                            onChange={(e) => imageChangeHandle(e)}
                            aria-describedby="imageHelpBlock"
                        />
                        <Form.Text id="imageHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            {/* description input */}
            <Row className='justify-content-center' >
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            maxLength={200}
                            onChange={(e) => setProductItem({ ...productItem, description: e.target.value })}
                        />
                    </Form.Group>
                </Col>
            </Row>
            {/* price */}
            <Row className='justify-content-center' >
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="price">Price: </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="image"
                            onChange={(e) => setProductItem({ ...productItem, price: e.target.value })}
                            aria-describedby="imageHelpBlock"
                        />
                        <Form.Text id="imageHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            {/* choose category */}
            <Row className='justify-content-center' >
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="category">Category: </Form.Label>
                        <Form.Select required id='category' onChange={(e) => setCategory(e.target.value)} aria-describedby='categoryHelpBlock'>
                            <option value=''>Choose Category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </Form.Select>
                        <Form.Text id="categoryHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            {/* choose subcategory */}
            <Row className='justify-content-center' >
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="subCategory">Sub Category: </Form.Label>
                        <Form.Select multiple required id='subCategory' value={subCategory} onChange={(e) => setSubCategory([...subCategory, e.target.value])} aria-describedby='subCategoryHelpBlock'>
                            {/* <option value={subCategory}>{subCategory}</option> */}
                            {subCategories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </Form.Select>
                        <Form.Text id="subCategoryHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            {/* add product */}
            <Row className='justify-content-center' >
                <Col >
                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
