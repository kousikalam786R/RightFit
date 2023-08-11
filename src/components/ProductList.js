import React, { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import setProducts from "../redux/action/productAction";
import Filter from "./Filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const ProductList = () => {
  //const [page, setPage] = useState(10);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
    headers: {
      Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo ",
    },
  };

  const ProductList = async () => {
    await axios
      .request(config)
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const products = useSelector((state) => state.allProducts.products.products);
  console.log(products);
  console.log(products.length);
  const productNumber = Math.ceil(products.length / 10);

  useEffect(() => {
    ProductList();
  }, []);

  //console.log(products);
  return (
    <>
      <div>
        <Row>
          <Col md={2}>
            <Filter />
          </Col>
          <Col md={10}>
            <Row>
              <ProductComponent />
            </Row>
          </Col>
        </Row>
      </div>

      {/* 
      <div className="container-fluid d-flex row">
        //{" "}
        <div>
          // <Filter />
          //{" "}
        </div>
        //{" "}
        <div>
          // <ProductComponent />
          //{" "}
        </div>
        //{" "}
      </div> */}
    </>
  );
};

export default ProductList;
