import React, { useEffect, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

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
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [subCategories, setSubCategories] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    const fetchCategories = () => {
        let categories = []
        product.forEach(pd => {
            categories.push(pd.category);
        });

        console.log(categories)
        setCategories(categories);
        setCategory(categories[0])
    }

    const fetchSubCategories = () => {
        let subCategories;
        product.forEach((pd) => {
            if (pd.category === category) {
                subCategories = pd.subCategory
            }
        })
        setSubCategories(subCategories)
        setSubCategory(subCategories[0])
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchSubCategories()
    }, [category])

    return (
        <Form className='container'>
            <h1>Add a Product</h1>
            <hr />
            <Row className='justify-content-center' >
                <Col xs={8} md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Name: </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="name"
                            aria-describedby="nameHelpBlock"
                        />
                        <Form.Text id="nameHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-center' >
                <Col xs={8} md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="image">Image: </Form.Label>
                        <Form.Control
                            required
                            type="file"
                            id="image"
                            aria-describedby="imageHelpBlock"
                        />
                        <Form.Text id="imageHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-center' >
                <Col xs={8} md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control required as="textarea" rows={3} maxLength={200} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-center' >
                <Col xs={8} md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="price">Price: </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="image"
                            aria-describedby="imageHelpBlock"
                        />
                        <Form.Text id="imageHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-center' >
                <Col xs={8} md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="category">Category: </Form.Label>
                        <Form.Select required id='category' value={category} onChange={(e) => setCategory(e.target.value)} aria-describedby='categoryHelpBlock'>
                            {/* <option value={category}>{category}</option> */}
                            {categories.map((cat) => (
                                <option value={cat}>{cat}</option>
                            ))}
                        </Form.Select>
                        <Form.Text id="categoryHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-center' >
                <Col xs={8} md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="subCategory">Sub Category: </Form.Label>
                        <Form.Select required id='subCategory' value={subCategory} onChange={(e) => setCategory(e.target.value)} aria-describedby='subCategoryHelpBlock'>
                            {/* <option value={subCategory}>{subCategory}</option> */}
                            {subCategories.map((cat) => (
                                <option value={cat}>{cat}</option>
                            ))}
                        </Form.Select>
                        <Form.Text id="subCategoryHelpBlock" muted>

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}
