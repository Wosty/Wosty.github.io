import { Row, Col } from "react-bootstrap";
import { ISubsection } from "@/models/section";
import styles from "@/styles/resume.module.css";

export default function SubsectionEntry({ subsection }: { subsection: ISubsection }) {
  return (
    <>
      <Row>
        <Col sm={12} md={6}>
          <h5 className={styles.subsectionTitle}>{subsection.title}</h5>
        </Col>
        <Col sm={12} md={6}>
          <h5 className={styles.subsectionDate}>{subsection.date}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {subsection.points.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </Col>
      </Row>
    </>
  );
}
