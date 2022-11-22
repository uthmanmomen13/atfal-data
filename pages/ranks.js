import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
    TYPE_INDEX,
    NAME_INDEX,
    REGION_NAME,
    Q1_TOTAL,
    Q2_TOTAL,
    Q3_TOTAL,
    Q4_TOTAL,
    ALL_Q_TOTAL,
    MAJLIS_SIZE,
} from "../components/const.js";

import RankHero from "../components/RankHero.js";
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
        updateFormData(handleFormData(response));
        updateLoaded(true);
      });
  }, []);

  if (isLoaded) {
    return (
      <>
        <Header
          data={{
            title: "Alm-e-Inami Rankings",
            description: "Atfal Alm-e-Inami Rankings 2022-23",
          }}
        />
        <Nav />
        <main className="mainContent">
          <RankHero />
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
            description: "Atfal Alm-e-Inami Rankings 2022-23",
          }}
        />
        <Nav />
        <main className="mainContent">
          <RankHero />
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
          region: row[REGION_NAME],
          q1: row[Q1_TOTAL],
          q2: row[Q2_TOTAL],
          q3: row[Q3_TOTAL],
          q4: row[Q4_TOTAL],
          all: row[ALL_Q_TOTAL],
          majlisSize: [MAJLIS_SIZE]
        });
        break;
      case "Region":
        rtnObject.regions.push({
          name: row[NAME_INDEX],
          region: row[REGION_NAME],
          q1: row[Q1_TOTAL],
          q2: row[Q2_TOTAL],
          q3: row[Q3_TOTAL],
          q4: row[Q4_TOTAL],
          all: row[ALL_Q_TOTAL],
          majlisSize: [MAJLIS_SIZE]
        });
        break;
      default:
    }
  });
  return rtnObject;
}

function getTopMajalis(formData) {
  return formData.majalis
    .map((majlis) => {
      return [
        majlis.name,
        (parseInt(majlis.all.replace(",", "")) /
          parseInt(majlis.allTarget.replace(",", ""))) *
          100,
        majlis.atfalCount,
        majlis.khuddamCount,
      ];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    });
}
