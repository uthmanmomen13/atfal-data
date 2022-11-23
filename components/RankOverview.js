import React from "react";
import * as styles from "../styles/RankOverview.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function StatsOverview({ data }) {
    let majlisList = data["majalis"];
    let large = []
    let medium = []
    let small = []
    majlisList.forEach(element => {
        switch(element.majlisSize) {
            case "Large":
                large.push(element);
                break;
            case "Medium":
                medium.push(element);
                break;
            case "Small":
                small.push(element);
                break;
        }
    });
    large.sort(function(a,b) {return b.all - a.all})
    medium.sort(function(a,b) {return b.all - a.all})
    small.sort(function(a,b) {return b.all - a.all})

    function getRows(data_) {
        let allRows = data_.map((entry, i) => 
        {
            return ( 
        <tr key={`${entry.region}_${entry.name}_Row`} style={{ backgroundColor: i == 0? "gold": i == 1? "silver" : i == 2? "#CD7F32" : "white"}}>
          <td>{entry.rank}</td>
          <td>{entry.name}</td>
          <td className="text-left">{entry.q1}</td>
          <td className="text-left">{entry.q2}</td>
          <td className="text-left">{entry.q3}</td>
          <td className="text-left">{entry.q4}</td>
          <td className="text-left">{entry.maal}</td>
          <td className="text-left">{entry.all}</td>
        </tr> 
      )})
    return (
        <>
            <thead>
                <tr>
                    <br/><br/>
                </tr>
                <tr>
                    <th colSpan="8" className="text-center">
                        <span className={styles.majalisTitle}>
                        {data_[0].majlisSize} Majalis
                        </span>
                    </th>
                </tr>
                <tr>
                <th>Rank</th>
                <th>Majlis</th>
                <th>Q1 points</th>
                <th>Q2 points</th>
                <th>Q3 points</th>
                <th>Q4 points</th>
                <th>Maal points</th>
                <th>Total points</th>
                </tr>
          </thead>
          <tbody>
            {allRows}
          </tbody>
          </>
          )
    }
    
    return (
        <Col lg={6} style={{ width: "auto", paddingLeft: "50px", paddingRight: "50px" }}>
        <table className="table table-hover">
          {getRows(large)}
          {getRows(medium)}
          {getRows(small)}

        </table>
        </Col>
      );
}