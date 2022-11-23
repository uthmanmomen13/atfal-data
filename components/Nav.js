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
        <NavDropdown title="Rankings">
            <NavDropdown.Item href="/">
            [2022-23 Rankings]
            </NavDropdown.Item>
            <NavDropdown.Item href="/21-22ranks">
            [2021-22 rankings]
            </NavDropdown.Item>
          </NavDropdown> 
          <NavDropdown title="Report Data">
            <NavDropdown.Item href="/22-23reports">
            [2022-23 Report Data]
            </NavDropdown.Item>
            <NavDropdown.Item href="/21-22reports">
            [2021-22 Report Data]
            </NavDropdown.Item>
          </NavDropdown>                 
        </Nav>
      </Container>
    </Navbar>
  );
}
