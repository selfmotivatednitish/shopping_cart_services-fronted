import { Badge, Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { ShoppingCart } from '@mui/icons-material'
import { LinkContainer } from 'react-router-bootstrap'

export default function Navbars() {

    return (
        <Navbar fixed='top' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/addProducts" >
                            <Nav.Link>Add Product</Nav.Link>
                        </LinkContainer>
                        
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <div>
                        <Button variant="light">
                            <Badge bg="light" text='dark'>
                                <ShoppingCart />
                                <span className='text-danger'>
                                    9
                                </span>
                            </Badge>
                        </Button>
                    </div>
                    <div>
                        Guest
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}