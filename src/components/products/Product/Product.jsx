import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AddShoppingCart } from "@mui/icons-material";

import "./Style.css";
import axios from "axios";
import base_url from "../../../api/bootapi";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
    const image = "data:image/png;base64," + product.image
    const navigate = useNavigate()

    const { auth, setProductId, user, cartItemCount, setCartItemCount } = useContext(AuthContext)

    const productViewHandler = () => {
        setProductId(product.id)
        navigate("/product/view")
    }

    const addToCartHandler = () => {
        if (auth) {
            axios.get(`${base_url}/cart/${user.id}/add/${product.id}/1`)
                .then(
                    () => {
                        setCartItemCount(cartItemCount + 1)
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

    const buyNowHandler = () => {
        let order = {
            "quantity": 1,
            "product": {
                "id": product.id
            }
        }
        if (auth) {
            axios.post(`${base_url}/order/${user.id}/createOrder`, order)
                .then(
                    () => {
                        toast.success("Item purchased ...")
                    },
                    (error) => {
                        console.log(error)
                        toast.error("Some thing went wrong")
                    }
                )
        } 
        else {
            toast.warning("Login first to buy now")
        }
    }


    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img onClick={productViewHandler} style={{cursor: "pointer"}} variant="top" src={image} />
            <Card.Body>
                <Card.Title className="text-truncate">{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text className="text-truncate">{product.description}</Card.Text>
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
};