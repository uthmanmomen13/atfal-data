import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/RegionalTable.module.css"

export default function RegionalTable({data, route}) {
    let regionsTable = Object.keys(data).map((region) => {
    return (
        <Col md={3} className="my-3" key={region}>
          <h3 className={styles.h3}>
            {region}{" "}
          </h3>
          
            {data[region].map((majlis) => 
            {
            let link = route + majlis.replace(" ", "_")
            return (<h5 >
                <a className={styles.a} href={link}>
                {majlis}
                </a> 
            </h5>
            )}
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