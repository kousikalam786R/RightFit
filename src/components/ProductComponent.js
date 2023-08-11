import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../App.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products.products);
  //console.log(products.length);
  console.log(products);
  const productList = products?.map((product) => {
    const { id, title, name, price, category, image } = product;
    return (
      <div className="" style={{ margin: "20px" }}>
        <Link to={`/product/${id}`}>
          <Card>
            <Card.Img src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>INR {price}.00</Card.Text>
              <Button className="buy-button">Buy Now</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  });
  return <>{productList}</>;
  // return (
  //   <div>
  //     {products?.map((item, index) => {
  //       <span key={index}>{item.name}</span>;
  //     })}
  //   </div>
  // );
};
export default ProductComponent;
