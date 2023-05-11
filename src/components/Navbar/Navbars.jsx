import {
    Button,
    Container,
    Form,
    Nav,
    NavDropdown,
    Navbar
} from "react-bootstrap";
import { ShoppingCart } from "@mui/icons-material";
import { LinkContainer } from "react-router-bootstrap";

import AuthContext from "../Context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Navbars() {

    const navigate = useNavigate()

    const { auth, setAuth, setCartItemCount, setUser, user, setProducts, setSearch, cartItemCount } = useContext(AuthContext);

    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        onSelectHandler("home");
    }, []);

    const onSelectHandler = (key) => {
        let urlFinal = base_url + "/products";
        if (key !== "home") {
            urlFinal += "/category/" + key;
            setSearch(true);
        } else {
            setSearch(false);
        }

        document.title = key;
        axios.get(urlFinal)
            .then(
                (response) => {
                    setProducts(response.data);
                    toast.success(key);
                },
                (error) => {
                    console.log(error);
                    console.log("Failure");
                    toast.error("Something went wrong ...");
                }
            );
    };

    const searchHandle = () => {
        if (searchItem !== "") {
            axios.get(`${base_url}/products/search/${searchItem}`).then(
                (response) => {
                    setProducts(response.data);
                    setSearch(true);
                    toast.success(`${searchItem}`);
                },
                (error) => {
                    console.log(error);
                    console.log("Failure");
                    toast.error("Something went wrong ...");
                }
            );
        }
    };

    const logoutFunc = () => {
        localStorage.removeItem("auth")
        setAuth(false)
        setUser({})
        setCartItemCount(0)
        alert("You has been successfully logout")
        navigate("/")
    }

    return (
        <>
            {/* <ToastContainer /> */}
            <Navbar sticky="top" bg="light" expand="lg">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#">
                            <img className="mx-3 me-0" src="/icon.png" alt="ecommerce" style={{ height: "45px", width: "55px" }} />
                            E-com
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                            onSelect={onSelectHandler}
                        >
                            <LinkContainer to="/">
                                <Nav.Link eventKey="home">Home</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item eventKey="electronics">
                                    Electronics
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="clothing">
                                    Clothing
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="books">Books</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="sports">Sports</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="phones_accessories">
                                    Phone Accessories
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="toys">Toys</NavDropdown.Item>
                            </NavDropdown>
                            {
                                user?.roles === "ROLE_ADMIN" ? (
                                    <LinkContainer to="/manageProduct">
                                        <Nav.Link>Manage Product</Nav.Link>
                                    </LinkContainer>
                                ) : (
                                    <div></div>
                                )
                            }

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => {
                                        setSearchItem(e.target.value);
                                    }}
                                />
                                <Button onClick={searchHandle} variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        <div className="pe-3">
                            <LinkContainer to="/getCart">
                                <Nav.Link bg="light" text="dark">
                                    <ShoppingCart />
                                    <span className="text-danger">{cartItemCount === 0 ? "" : cartItemCount}</span>
                                </Nav.Link>
                            </LinkContainer>
                        </div>
                        <Nav style={{ display: auth === false ? "block" : "none" }}>
                            <LinkContainer to="/signin">
                                <Nav.Link>Signin</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav style={{ display: auth === false ? "block" : "none" }}>
                            <LinkContainer to="/signup">
                                <Nav.Link>Signup</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav style={{ display: auth === true ? "block" : "none" }}>
                            <Nav.Link onClick={logoutFunc}>Logout</Nav.Link>
                        </Nav>
                        <Nav>
                            <LinkContainer to="/profile">
                                <Nav.Link>{auth ? user.name : "Guest"}</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
