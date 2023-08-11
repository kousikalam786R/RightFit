import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar style={{ position: "relative" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">RIGHTFIT.COM</Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#deets">All Products</Nav.Link>
          <Nav.Link href="#memes">Featured Products</Nav.Link>
          <Nav.Link href="#memes" className="ml-4">
            <BsCart2 color="black" size="20px" />
          </Nav.Link>
          <Nav.Link>
            <Badge bg="none">{0}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
