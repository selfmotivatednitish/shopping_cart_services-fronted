import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AddShoppingCart } from "@mui/icons-material";

import "./Style.css";
import axios from "axios";
import base_url from "../../../api/bootapi";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthProvider";

export default function Product({ product }) {
  const image = "data:image/png;base64," + product.image

  const {auth, user} = useContext(AuthContext)

  const addToCartHandler = () => {
    console.log("Add to cart button pressed")
    if(auth) {
        axios.get(`${base_url}/cart/${user.id}/add/${product.id}`).then(
          (response) => {
            console.log(response.data);
            toast.success("Item added to cart successfully");
          },
          () => {
            console.error("Something went wrong");
          }
        );
    }
    else {
        toast.error("authentication fail.. Please login")
    }
  };

  const buyNowHandler = () => {};

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button onClick={addToCartHandler} variant="primary">
            <AddShoppingCart />
          </Button>
          <Button onClick={buyNowHandler} variant="danger">
            Buy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
