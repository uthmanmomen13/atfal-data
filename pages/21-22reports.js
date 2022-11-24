import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import regionJson from "./21-22regions.json"
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import RegionalTable from "../components/RegionalTable.js";

export default function Reports({ data }) {

    return (
        <>
          <Header
            data={{
              title: "Report Data",
              description: "2021 - 22 Monthly Report Data",
            }}
          />
          <Nav />
          <main className="mainContent">
            <Hero text={"2021 - 22 Monthly Report Data"}/>
            <RegionalTable data={regionJson.regions}/>
          </main>
          <Footer />
        </>
      );
}