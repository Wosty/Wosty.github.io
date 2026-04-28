import { Row, Container } from "react-bootstrap";
import experience from "@/data/experience.json";
import projects from "@/data/projects.json";
import SectionEntry from "@/components/resume/SectionEntry";
import styles from "@/styles/resume.module.css";

export default function Resume() {
  return (
    <>
      <Container className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Wesley Till</h1>
        <hr />
        <Row>
          <h2>SUMMARY</h2>
          <p>A dedicated software engineer passionate about tackling complex challenges and driving innovative solutions. With a strong foundation in various programming languages and technologies, I excel in creating efficient, scalable software systems. Known for my ability to foster teamwork, I leverage collaborative efforts to achieve customer-centric results. My proactive approach to problem-solving and continuous learning empowers me to contribute significantly to software engineering teams.</p>
        </Row>
        <Row className="mt-4">
          <h2>EXPERIENCE</h2>
          {experience.map((exp, i) => <SectionEntry key={i} section={exp} />)}
        </Row>
        <Row className="mt-4">
          <h2>PROJECTS</h2>
          {projects.map((project, i) => <SectionEntry key={i} section={project} />)}
        </Row>
        <h2 className="mt-4">SKILLS</h2>
        <p>
          <strong>Programming Languages: </strong>C#, Python, TypeScript, C++, Java, MATLAB<br />
          <strong>Development Tools: </strong>React, Git, Docker, Kubernetes, RabbitMQ, Elasticsearch, Regex, Postman, Splunk<br />
          <strong>Technical Strengths: </strong>High-performance APIs, low-latency architectures, scalable backend design, observability & reliability engineering<br />
        </p>
        <h2 className="mt-4">EDUCATION</h2>
        <p>
          <b>Texas A&M University</b> <span className={`h5 ${styles.subsectionDate}`}>May 2021</span><br />
          College Station, Texas<br />
          Bachelor of Science in Computer Science<br />
          Minor in Communications
        </p>
      </Container>
    </>
  );
}
