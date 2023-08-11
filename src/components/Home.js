import React from "react";
import { Button, Container } from "react-bootstrap";

import ProductList from "./ProductList";

const Home = () => {
  //   const myStyle = {
  //     backgroundImage:
  //       "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
  //     height: "80vh",

  //     fontSize: "50px",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //   };
  const myStyle = {
    height: "80vh",
    backgroundImage: "url(/img/img1.jpg)",
    backgroundSize: "cover",
    position: "relative",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle} className="">
        <Container>
          <div style={{ position: "absolute", marginTop: "150px" }}>
            <div style={{ fontFamily: "revert" }} className="">
              <h1>Latest Styles</h1>
              <p>At Yesterday's Prices</p>
            </div>
            <div>
              <Button variant="danger">BROWSE ALL STYLES</Button>
            </div>
          </div>
        </Container>
      </div>
      <ProductList />
    </>
  );
};

export default Home;
