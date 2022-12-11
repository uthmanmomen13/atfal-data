import Container from "react-bootstrap/Container";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MONTHS } from "./const";
const MONTH_INDEX = 1;


export default function MajlisReportGraphs({majlisList, headerList, indices}) {

  function getDataForBarGraph(column) {
    let dataForGraph = Array(12).fill(0);
    majlisList.map((entry) => {
      let toPush = entry[column];
      let month = entry[MONTH_INDEX];
      let index = MONTHS.indexOf(month);
      if (toPush == "") {
        toPush = 0;
      } else {
        toPush = parseInt(toPush)
      }
      dataForGraph[index] += toPush;
    })
    return dataForGraph;
  }

  function getDataForPieGraph(column) {
    let dataForGraph = [0, 0];
    majlisList.map((entry) => {
      if (entry[column] == "Yes") {
        dataForGraph[0] += 1;
      } else {
        dataForGraph[1] += 1;
      }
    })
    return dataForGraph;
  }

  let barGraphs = indices["barIndices"].map((index) => {
    let barGraphData = getDataForBarGraph(index);
    return (
        <Col key={index}lg={6} className="my-3" style={{ minHeight: "200px" }}>
          <BarGraph data={barGraphData} title={headerList[index]}/>
        </Col> 
    )}
  );

  let allBarGraphs = 
  <section className="my-4" >
      <Container>
        <Row className="justify-content-center py-5 text-light">
          {barGraphs}
        </Row>
      </Container>
      </section>

  let pieGraphs = indices["pieIndices"].map((index) => {
    let pieGraphData = getDataForPieGraph(index);
      return (
        <Col key={index} lg={4} className="my-3" style={{ minHeight: "200px" }}>
            <PieGraph data={pieGraphData} title={headerList[index]}/>
          </Col>
        )
    }
  )
  let allPieGraphs = 
    <section className="my-4" >
      <Container>
        <Row className="justify-content-center py-5 text-light">
          {pieGraphs}
        </Row>
      </Container>
      </section>

  return (
      <>
      {allPieGraphs}
      {allBarGraphs}
      </>
  )}
