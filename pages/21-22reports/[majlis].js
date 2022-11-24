import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Header from "../../components/Header";
import Nav from "../../components/Nav.js";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import MajlisReports from "../../components/MajlisReports";
const MAJLIS_INDEX = 4;
import allResponses from "../allResponses.json"


export default function Majlis() {
    const [majlisData, updateMajlisData] = useState([]);
    const [headerData, updateHeaderData] = useState([]);
    const [isLoaded, updateLoaded] = useState(false);
    const router = useRouter()
    let { majlis } = router.query
    if (majlis) {
        majlis = majlis.replace("_", " ");
    }
    
    useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          };
          const url = "/api/allResponses";
      
          fetch(url, requestOptions)
            .then((response) => response.json())
            .then((response) => {
              updateMajlisData(handleMajlisData(response, majlis));
              updateHeaderData(response[0])
              updateLoaded(true);
            });

        updateMajlisData(allResponses.sheetData, majlis);
        updateLoaded(true);

        updateHeaderData(allResponses.sheetData[0]);
    }, [])
    

    if (isLoaded) {
    return (
        <>
          <Header
            data={{
              title: majlis + " Report Data",
              description: "2021 - 22 Monthly Report Data",
            }}
          />
          <Nav />
          <main className="mainContent">
            <Hero text={majlis + " 2021 - 22 Monthly Report Data"}/>
            <MajlisReports majlisList={majlisData} headerData={headerData} majlis={majlis}/>
          </main>
          <Footer />
        </>
      );
    }
      else {
        return (
            <>
              <Header
                data={{
                  title: majlis + " Report Data",
                  description: "2021 - 22 Monthly Report Data",
                }}
              />
              <Nav />
              <main className="mainContent">
                <Hero text={majlis + " 2021 - 22 Monthly Report Data"}/>
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

function handleMajlisData(response, majlis) {
    let majlisList = [1]
    response.map((entry) => {
        if (entry[MAJLIS_INDEX] == majlis) {
            majlisList.push(entry);
        }
    }
    )
    return majlisList;
}