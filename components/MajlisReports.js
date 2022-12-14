import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import styles from "../styles/Table.module.css"
const MONTH_INDEX = 1;


export default function MajlisReports({majlisList, headerList}) {
    let list = getRows(majlisList)

    function getRows(data_) {
      let allRows = data_.map((entry, j) => { // each entry represents a monthly report
        
        let items = entry.map((entryData, i) => { // each entryData represents a specific question
          return (<td key={`${i}`}> {entryData}</td>)
          })
          
        return (  
          // return row with all items
          <tr key={`${entry[0]}_Row${entry[1]}${entry[3]}`} className={styles.tr}>  
            {items}
          </tr> 
        )}
      
      )
    let headerItems = headerList.map((item, i) => { // each item is the title of a question
      return (<th key={i}> {item} </th>)
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
        <Col sm={3} style={{position:"relative", height:"360px", width: "97%", left: "20px", overflow: "scroll" }}> 
          <table style={{width: "120%", marginTop: "10px"}}>
            {list}
          </table>
        </Col>
    )
}
