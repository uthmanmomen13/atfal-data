import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import BarGraph from "./BarGraph";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Table.module.css"


export default function MajlisReportGraphs({majlisList, headerList, indices}) {

  function getDataForGraph(column) {
    let dataForGraph = [];
    majlisList.map((entry) => {
      let toPush = entry[column];
      if (toPush == "") {
        toPush = 0;
      } else {
        toPush = parseInt(toPush)
      }
      dataForGraph.push(toPush);
    })

    return dataForGraph;
  }

  let allGraphs = indices.map((index) => {
  let graphData = getDataForGraph(index);
  let max = Math.max(...graphData) + 2
  return (
    <section className="my-4" >
      <Container>
          <Col lg={6} style={{ minHeight: "200px" }}>
            <BarGraph data={graphData} title={headerList[index]}/>
          </Col>
      </Container>
    </section>
  )}
  );

  return (
      <>
      {allGraphs}
      </>
  )}
