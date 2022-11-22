import React from "react";
import * as styles from "../styles/RankOverview.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
    TYPE_INDEX,
    NAME_INDEX,
    REGION_NAME,
    Q1_TOTAL,
    Q2_TOTAL,
    Q3_TOTAL,
    Q4_TOTAL,
    ALL_Q_TOTAL,
    MAJLIS_SIZE,
} from "../components/const.js";

export default function StatsOverview({ data }) {
    console.log(data);
    let majlisList = data["majalis"];
    console.log(majlisList[0].name)
    
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Majlis</th>
              <th>Q1 points</th>
              <th>Q2 points</th>
              <th>Q3 points</th>
              <th>Q4 points</th>
              <th>Total points</th>
            </tr>
          </thead>
          <tbody>
            {majlisList.map((entry, i) => (
              <tr key={`${entry[REGION_NAME]}_${entry[NAME_INDEX]}_Row`}>
                <td>{entry.name}</td>
                <td className="text-left">{entry.q1}</td>
                <td className="text-left">{entry.q2}</td>
                <td className="text-left">{entry.q3}</td>
                <td className="text-left">{entry.q4}</td>
                <td className="text-left">{entry.all}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}