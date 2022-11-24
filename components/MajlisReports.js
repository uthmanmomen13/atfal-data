import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/RegionalTable.module.css"
import Link from "next/link.js";
const MAJLIS_INDEX = 4;


export default function MajlisReports({headerData, majlisList, majlis}) {
    let list = majlisList.map((entry, i) => {
        console.log(i)
        if (entry[MAJLIS_INDEX] == majlis) {
            majlisList.push(entry);
        }
    }
    )
    return (
        <div>
            {headerData}
            {list}
        </div>
    )
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