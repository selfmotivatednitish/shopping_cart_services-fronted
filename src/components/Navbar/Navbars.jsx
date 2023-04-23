import {
  Badge,
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Tab,
  Tabs,
  ToastContainer,
} from "react-bootstrap";
import { ShoppingCart } from "@mui/icons-material";
import { LinkContainer } from "react-router-bootstrap";

import AuthContext from "../Context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";

export default function Navbars() {
  const { auth, user, setProducts, setSearch } = useContext(AuthContext);

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

    if (key === "search") urlFinal += "/search/" + searchItem;

    if (key !== "search") setSearchItem("");

    document.title = key;
    axios.get(urlFinal).then(
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

  const searchHandle = (e) => {
    console.log("serach Click");
    if (searchItem !== "")
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
    e.preventDefault();
  };

  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <ToastContainer />
        <Container fluid>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
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
              <LinkContainer to="/addProducts">
                <Nav.Link>Add Product</Nav.Link>
              </LinkContainer>

              <Form onSubmit={searchHandle} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    setSearchItem(e.target.value);
                  }}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            <div>
              <Button variant="light">
                <Badge bg="light" text="dark">
                  <ShoppingCart />
                  <span className="text-danger">9</span>
                </Badge>
              </Button>
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
              <LinkContainer to="/logout">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/profile">
                <Nav.Link>{auth ? user.name : "Guest"}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Tabs
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title="Home">
          
        </Tab>
        <Tab eventKey="profile" title="Profile">
          
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">
         
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          
        </Tab>
      </Tabs> */}
    </>
  );
}
