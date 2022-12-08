import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Table.module.css"
const MAJLIS_INDEX = 4;


export default function MajlisReports({majlisList}) {
  sortByMonth(majlisList)
    let list = getRows(majlisList)

    function getRows(data_) {
        let allRows = data_.map((entry, i) => 
        {
            return ( 
        <tr key={`${entry[0]}_Row`} className={styles.tr} >
          <td >{entry[0]}</td>
          <td >{entry[1]}</td>
          <td >{entry[2]}</td>
          <td >{entry[3]}</td>
          <td >{entry[4]}</td>
          <td >{entry[5]}</td>
          <td >{entry[6]}</td>
          <td >{entry[7]}</td>
          <td >{entry[8]}</td>
          <td >{entry[9]}</td>
          <td >{entry[10]}</td>
          <td >{entry[11]}</td>
          <td >{entry[12]}</td>
          <td >{entry[13]}</td>
          <td >{entry[14]}</td>
          <td >{entry[15]}</td>
          <td >{entry[16]}</td>
          <td >{entry[17]}</td>
          <td >{entry[18]}</td>
          <td >{entry[19]}</td>
          
        </tr> 
      )})
    return (
        <>
            <thead >
                <tr>
                    <br/><br/>
                </tr>
                
                <tr className={styles.tr} >
                <th >Timestamp</th>
                <th >Month</th>
                <th >Name</th>
                <th >Majlis</th>
                <th >Jamaat role</th>
                <th >Held amila meeting</th>
                <th >Meeting minutes</th>
                <th >Parents contacted</th>
                <th >Atfal classes held</th>
                <th >Average attendance</th>
                <th >Atfal who read book pages</th>
                <th >Khidmat-e-Khalq activities held</th>
                <th >Waqar-e-Amal activities held</th>
                <th >Atfal participants in Waqar-e-Amal</th>
                <th >Held a sports event</th>
                <th >Atfal participants in sports</th>
                <th >Atfal encouraged to write for Al-Bashir</th>
                <th >Reminded parents to subscribe to Atfal Digest</th>
                <th >Waqf-e-Nau who attended class</th>
                </tr>
          </thead>
          <tbody>
            {allRows}
          </tbody>
          </>
          )
    }

    return (
        <Col style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <table style={{width: "150%"}}>
          {list}
        </table>
        
        </Col>
    )
}

function sortByMonth(arr) {
  
  var months = ["November", "December", "January", "February", "March", "April", "May", "June",
  	        "July", "August", "September", "October"];
  arr.sort(function(a, b){
      return months.indexOf(a[1])
           - months.indexOf(b[1]);
  });
}
