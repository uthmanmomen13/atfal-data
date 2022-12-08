import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Header from "../../components/Header";
import Nav from "../../components/Nav.js";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import MajlisReports from "../../components/MajlisReports";
const MAJLIS_INDEX = 3;

export default function Majlis() {
    const [majlisData, updateMajlisData] = useState([]);
    const [headerData, updateHeaderData] = useState([]);
    const [isLoaded, updateLoaded] = useState(false);
    const router = useRouter()
    let { majlis } = router.query
    if (majlis) {
        majlis = majlis.replace("_", " ");
    }

    const header = ["Timestamp",
    "Month",
    "Name",
    "Majlis",
    "Jamaat role",
    "Held amila meeting",
    "Meeting minutes",
    "Parents contacted",
    "Atfal classes held",
    "Average attendance",
    "Atfal who read book pages",
    "Khidmat-e-Khalq activities held",
    "Waqar-e-Amal activities held",
    "Atfal participants in Waqar-e-Amal",
    "Held a sports event",
    "Atfal participants in sports",
    "Atfal encouraged to write for Al-Bashir",
    "Checked if Parents/Atfal are getting Digest",
    "Created content for Atfal social media",
    "Waqf-e-Nau who attended class"]

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };
          const url = "/api/responses22-23";
      
          fetch(url, requestOptions)
            .then((response) => response.json())
            .then((response) => {
              updateMajlisData(handleMajlisData(response, majlis));
              updateHeaderData(response[0])
              updateLoaded(true);
            });

    }, [isLoaded])
    

    if (isLoaded) {
    return (
        <>
          <Header
            data={{
              title: majlis + " Report Data",
              description: "2022 - 23 Monthly Report Data",
            }}
          />
          <Nav />
          <main className="mainContent">
            <Hero text={majlis + " 2022 - 23 Monthly Report Data"}/>
            <MajlisReports majlisList={majlisData} headerList={header}/>
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
                  description: "2022 - 23 Monthly Report Data",
                }}
              />
              <Nav />
              <main className="mainContent">
                <Hero text={majlis + " 2022 - 23 Monthly Report Data"}/>
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
    let majlisList = []
    response.map((entry) => {
        if (entry[MAJLIS_INDEX] == majlis) {
            majlisList.push(entry);
        }
    }
    )
    return majlisList;
}