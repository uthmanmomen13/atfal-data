import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Table.module.css"


export default function MajlisReports({majlisList, headerList}) {
  // sortByMonth(majlisList)

    let list = getRows(majlisList)

    function getRows(data_) {
        let allRows = data_.map((entry, i) => // each entry represents a monthly report
        {
          let items = entry.map((entryData, i) => { // each entryData represents a specific question
            return (<td key={i}> {entryData}</td>)
          })
            return ( 
        <tr key={`${entry[0]}_Row${entry[1]}`} className={styles.tr} >
          {items}
        </tr> 
      )})
    let headerItems = headerList.map((item, i) => { // each item is the title of a question
      return (<th> {item} </th>)
    })
    return (
        <>
          <thead >
            <tr className={styles.tr}>
              {headerItems}
            </tr>
          </thead>
          <tbody>{allRows}</tbody>
          </>
          )};

    return (
        <Col sm={3} style={{width: "100%", paddingLeft: "20px", paddingRight: "20px", overflow: "scroll" }}> 
          <table style={{width: "120%", marginTop: "30px"}}>
            {list}
          </table>
        </Col>
    )}

function sortByMonth(arr) {
  
  var months = ["November", "December", "January", "February", "March", "April", "May", "June",
  	        "July", "August", "September", "October"];
  arr.sort(function(a, b){
      return months.indexOf(a[1])
           - months.indexOf(b[1]);
  });
}
