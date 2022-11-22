import React from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function Navigation() {

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/atfal-logo-title.png" width={100} height={90} />
        </Navbar.Brand>
        
        <Nav>        
        <Nav.Link href="/ranks">Rankings</Nav.Link>            
        </Nav>
        
      </Container>
    </Navbar>
  );
}
