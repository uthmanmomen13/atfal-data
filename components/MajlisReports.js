import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Table.module.css"
const MAJLIS_INDEX = 4;


export default function MajlisReports({majlisList, headerList}) {
  sortByMonth(majlisList)
    let list = getRows(majlisList)

    function getRows(data_) {
        let allRows = data_.map((entry, i) => 
        {
          let items = entry.map((entryData, i) => {
            return (<td key={i}> {entryData}</td>)
          })
            return ( 
        <tr key={`${entry[0]}_Row${entry[1]}`} className={styles.tr} >
          {items}
          
        </tr> 
      )})
    let headerItems = headerList.map((item, i) => {
      return (<th> {item} </th>)
    })
    return (
        <>
          <thead >
            <tr className={styles.tr} >
              {headerItems}
            </tr>
          </thead>
          <tbody>
            {allRows}
          </tbody>
          </>
          )
    }

    return (
        <Col style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <table style={{width: "120%", marginTop: "30px"}}>
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
