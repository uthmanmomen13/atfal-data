import React, { useState, useEffect } from "react";
const MONTH_INDEX = 1;
import MajlisReports from "./MajlisReports";
import MajlisReportGraphs from "./MajlisReportGraphs";
import DropdownOption from "./DropdownOption";

export default function MajlisPage({majlisList, headerList, indices}) {

  const [filter, setFilter] = useState("");
  const [majlisData, setMajlisData] = useState(majlisList);

  useEffect(() => {
    let filteredData = []
    majlisList.map((entry) => {
      if (filter == "" || entry[MONTH_INDEX] == filter) {
        filteredData.push(entry)
      }
    })
    setMajlisData(filteredData);
  }, [filter, majlisList])

  return (
      <>
        {/* <div style={{paddingLeft: "20px", marginBottom: "20px"}}>
          <DropdownOption callback={setFilter}/>
        </div> */}
        {/* <MajlisReports majlisList={majlisData} headerList={headerList}/> */}
        <MajlisReportGraphs majlisList={majlisData} indices={indices} headerList={headerList}/>
      </>
  )
}
