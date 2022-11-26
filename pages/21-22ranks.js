import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
    TYPE_INDEX,
    NAME_INDEX,
    REGION_INDEX,
    Q1_INDEX,
    Q2_INDEX,
    Q3_INDEX,
    Q4_INDEX,
    TOTAL_INDEX,
    MAJLIS_SIZE_INDEX,
    RANK_INDEX,
    MAAL_INDEX
} from "../components/const.js";

import Hero from "../components/Hero.js";
import RankOverview from "../components/RankOverview.js";


import Footer from "../components/Footer.js";

export default function Stats() {
  const [formData, updateFormData] = useState([]);
  const [isLoaded, updateLoaded] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const url = "/api/sheet";

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        updateFormData(handleFormData(response)); // This finishes quickly because response is not very big
        updateLoaded(true);
      });
    

  }, [isLoaded]);

  if (isLoaded) {
    return (
      <>
        <Header
          data={{
            title: "Alm-e-Inami Rankings",
            description: "Atfal Alm-e-Inami Rankings 2021-22",
          }}
        />
        <Nav />
        <main className="mainContent">
          <Hero text={"2021 - 22 Alm-e-Inami Rankings"}/>
          <RankOverview data={formData}/>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header
          data={{
            title: "Alm-e-Inami",
            description: "Atfal Alm-e-Inami Rankings 2021-22",
          }}
        />
        <Nav />
        <main className="mainContent">
        <Hero text={"2021 - 22 Alm-e-Inami Rankings"}/>
          
          <section className="bg-dark py-5">
            <Container>
                <Row className="justify-content-end text-white">
                    <Col xs="auto">Loading...</Col>
                </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
function handleFormData(response) {
  //{totals: {all: "123", khuddam: "12", atfal: "5"}, regions: [], majalis: []}
  let rtnObject = { regions: [], majalis: [] };

  response.map((row) => {
    switch (row[TYPE_INDEX]) {
      case "Majlis":
        rtnObject.majalis.push({
          name: row[NAME_INDEX],
          region: row[REGION_INDEX],
          q1: row[Q1_INDEX],
          q2: row[Q2_INDEX],
          q3: row[Q3_INDEX],
          q4: row[Q4_INDEX],
          maal: row[MAAL_INDEX],
          all: row[TOTAL_INDEX],
          majlisSize: row[MAJLIS_SIZE_INDEX],
          rank: row[RANK_INDEX]
        });
        break;
      default:
    }
  });
  return rtnObject;
}


