import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Header from "../../components/Header";
import Nav from "../../components/Nav.js";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import { MAJALIS22, REGIONS22, MONTHS } from "../../components/const";
import regionJson from "../../components/22-23regions.json"


const MAJLIS_INDEX = 3;
import MajlisPage from "../../components/MajlisPage";

export default function Majlis() {
    const [majlisData, updateMajlisData] = useState([]);
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
              if (MAJALIS22.has(majlis)) {
                updateMajlisData(handleMajlisData(response, majlis)); // selects all data from this majlis
              } else if (REGIONS22.has(majlis)) {
                updateMajlisData(handleRegionData(response, majlis));
              }
              updateLoaded(true);
            });

    }, [isLoaded])

    if (isLoaded) {
      let indices = {
        barIndices: [6,7,8,9,10,11,12,14],
        pieIndices: [5,13,15,16,17]
      }
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
          {MAJALIS22.has(majlis) || REGIONS22.has(majlis)?
            <>
              <Hero text={majlis + " 2021 - 22 Monthly Report Data"}/>
              <MajlisPage majlisList={majlisData} indices={indices} headerList={header}/>
            </>
            :
            <Hero text={"Majlis not found: " + majlis}/>
            }
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
  let monthsSubmitted = new Set()
  response.map((entry) => {
      if (entry[MAJLIS_INDEX] == majlis) {
          majlisList.push(entry);
          monthsSubmitted.add(entry[1])
      }
  })
  // MONTHS.map((month) => {
  //   if (!monthsSubmitted.has(month)) {
  //     let missingMonth = new Array(18);
  //     missingMonth.fill("");
  //     missingMonth[0] = "Report not submitted"
  //     missingMonth[1] = month;
  //     majlisList.push(missingMonth)
  //   }
  // })
  sortByMonth(majlisList)
  return majlisList;
}

function handleRegionData(response, region) {
  let regionData = [];
  let majalisInRegion = new Set(regionJson.regions[region])
  response.map((entry) => {
    let majlis = entry[MAJLIS_INDEX]
    if (majalisInRegion.has(majlis)) {
      regionData.push(entry);
    }
  })
  sortByMonth(regionData)

  return regionData;
}

function sortByMonth(arr) {

const months = ["November", "December", "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October"];
arr.sort(function(a, b){
    return months.indexOf(a[1])
         - months.indexOf(b[1]);
});
}