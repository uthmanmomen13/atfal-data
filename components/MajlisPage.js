import React, { useState, useEffect } from "react";
const MONTH_INDEX = 1;
import MajlisReports from "./MajlisReports";
import MajlisReportGraphs from "./MajlisReportGraphs";
import DropdownOption from "./DropdownOption";

export default function MajlisPage({majlisList, headerList, indices}) {

  const [filter, setFilter] = useState("");
  const [majlisData, setMajlisData] = useState(majlisList);

  useEffect(() => {
    console.log(filter)
    let filteredData = []
    majlisList.map((entry) => {
      console.log(entry[MONTH_INDEX])
      if (filter == "" || entry[MONTH_INDEX] == filter) {
        filteredData.push(entry)
      }
    })
    setMajlisData(filteredData);
  }, [filter])
  
  return (
      <>
        <div style={{paddingLeft: "20px"}}>
          <DropdownOption callback={setFilter}/>
        </div>
        <MajlisReports majlisList={majlisData} headerList={headerList}/>
        <MajlisReportGraphs majlisList={majlisData} indices={indices} headerList={headerList}/>
      </>
  )
}
