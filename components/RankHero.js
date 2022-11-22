import * as styles from "../styles/RankHero.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

export default function RanksHero() {
  return (
    <div className={styles.container}>
      <Container>
        <Row className="text-center text-md-left">
          <Col sm={12} md={6}>
            <Image src="/atfal-logo.png" width={280} height={315} />
          </Col>
          <Col sm={12} md={6}>
            <h1 className={styles.heading}>
              <span className={styles.headingLabel}>
                Majlis Atfal-ul-Ahmadiyya USA
              </span>
              <br />
              2022 - 2023 
              <br />
              Alm-e-Inami
              <br />
              Rankings
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
