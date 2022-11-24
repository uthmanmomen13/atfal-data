import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/RegionalTable.module.css"
import Link from "next/link.js";

export default function RegionalTable({data}) {
    // console.log(data)
    let regionsTable = Object.keys(data).map((region) => {
    return (
        <Col md={3} className="my-3" key={region}>
          <h3 className={styles.h3}>
            {region}{" "}
          </h3>
          
        {data[region].map((majlis) => 
            {
                let link = "/21-22reports/" + majlis.replace(" ", "_")
                console.log(link)
            return (<h5>
            <Link href={link}>{majlis}</Link> 
            </h5>)
            }
            )}
        </Col>
      );
    })
    return (
        <section className="bg-dark py-5">
         <Container>
            <Row className="justify-content-center py-5 text-light">
            {regionsTable}
            </Row>
         </Container>
        </section>
    )
}