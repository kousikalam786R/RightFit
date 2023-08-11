import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProduct } from "../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../App.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  //const products = useSelector((state) => state.allProducts.products.products);
  const { id, title, name, price, category, image } = product;

  const { productId } = useParams();
  console.log(product);
  const dispatch = useDispatch();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products/${productId}`,
    headers: {
      Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo ",
    },
  };

  const fetchProductDetails = async () => {
    await axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        dispatch(selectedProduct(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
  }, [productId]);

  return (
    <>
      <Container>
        <Row className=" mt-5">
          <Col md={4}>
            <img src={image} alt="" />
          </Col>

          <Col md={4}>
            <div>
              <h2>{name}</h2>
              <p> INR {price}.00</p>
              <Button variant="danger">Add to cart</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
