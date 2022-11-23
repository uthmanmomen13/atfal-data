import * as styles from "../styles/RankHero.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

export default function RanksHero() {
  return (
    <div className={styles.container}>
      <Container>
        <Row className="text-center justify-content-center">
          <Col sm={6} md={10} >
            <Image src="/atfal-logo.png" width={280} height={315} />
            <h1 className={styles.heading}>
              <span className={styles.headingLabel}>
                Majlis Atfal-ul-Ahmadiyya USA
              </span>
              <br/>
              2022 - 23 
              Alm-e-Inami
              Rankings
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
