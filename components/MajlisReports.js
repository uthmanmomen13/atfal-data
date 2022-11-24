import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/RegionalTable.module.css"
import Link from "next/link.js";
const MAJLIS_INDEX = 4;


export default function MajlisReports({headerData, majlisList}) {
    let list = getRows(majlisList)

    function getRows(data_) {
        let allRows = data_.map((entry, i) => 
        {
            return ( 
        <tr key={`${entry[0]}_Row`} >
          <td>{entry[0]}</td>
          <td>{entry[1]}</td>
          <td>{entry[2]}</td>
          <td>{entry[3]}</td>
          <td>{entry[4]}</td>
          <td>{entry[5]}</td>
          <td>{entry[6]}</td>
          <td>{entry[7]}</td>
          <td>{entry[8]}</td>
          <td>{entry[9]}</td>
          <td>{entry[10]}</td>
          <td>{entry[11]}</td>
          <td>{entry[12]}</td>
          <td>{entry[13]}</td>
          <td>{entry[14]}</td>
          <td>{entry[15]}</td>
          <td>{entry[16]}</td>
          <td>{entry[17]}</td>
          <td>{entry[18]}</td>
          <td>{entry[19]}</td>
          
        </tr> 
      )})
    return (
        <>
            <thead>
                <tr>
                    <br/><br/>
                </tr>
                
                <tr>
                <td>Timestamp</td>
                <td>Month</td>
                <td>Name</td>
                <td>Majlis</td>
                <td>Jamaat role</td>
                <td >Held amila meeting</td>
                <td >Meeting minutes</td>
                <td>Parents contacted</td>
                <td>Atfal classes held</td>
                <td>Average attendance</td>
                <td>Atfal who read book pages</td>
                <td>Khidmat-e-Khalq activities held</td>
                <td>Waqar-e-Amal activities held</td>
                <td>Atfal participants in Waqar-e-Amal</td>
                <td>Held a sports event</td>
                <td>Atfal participants in sports</td>
                <td>Atfal encouraged to write for Al-Bashir</td>
                <td>Reminded parents to subscribe to Atfal Digest</td>
                <td>Waqf-e-Nau who attended class</td>

                </tr>
          </thead>
          <tbody>
            {allRows}
          </tbody>
          </>
          )
    }

    return (
        <Col style={{ width: "100%", paddingLeft: "50px", paddingRight: "50px" }}>
        <table className="table table-hover">
          {list}

        </table>
        </Col>
    )
}
