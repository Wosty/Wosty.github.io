import { Row, Container } from "react-bootstrap";
import experience from "@/data/experience.json";
import projects from "@/data/projects.json";
import SectionEntry from "@/components/resume/SectionEntry";

export default function Resume() {
  return (
    <>
      <Container style={{ padding: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>Wesley Till</h1>
        <hr />
        <Container>
          <Row>
            <h2>SUMMARY</h2>
            <p>A dedicated software engineer passionate about tackling complex challenges and driving innovative solutions. With a strong foundation in various programming languages and technologies, I excel in creating efficient, scalable software systems. Known for my ability to foster teamwork, I leverage collaborative efforts to achieve customer-centric results. My proactive approach to problem-solving and continuous learning empowers me to contribute significantly to software engineering teams.</p>
          </Row>
          <br />
          <Row>
            <h2>EXPERIENCE</h2>
            {experience.map((exp, i) => <SectionEntry key={i} section={exp} />)}
          </Row>
          <br />
          <Row>
            <h2>PROJECTS</h2>
            {projects.map((project, i) => <SectionEntry key={i} section={project} />)}
          </Row>
          <br />
          <h2>SKILLS</h2>
          <p>
            <span style={{ fontWeight: "bold" }}>Programming Languages: </span>C#, Python, TypeScript, C++, Java, MATLAB<br />
            <span style={{ fontWeight: "bold" }}>Development Tools: </span>React, Git, Docker, Kubernetes, RabbitMQ, Elasticsearch, Regex, Postman, Splunk<br />
            <span style={{ fontWeight: "bold" }}>Technical Strengths: </span>High-performance APIs, low-latency architectures, scalable backend design, observability & reliability engineering<br />
          </p>
          <h2>EDUCATION</h2>
          <p>
            <b>Texas A&M University</b>	<span className='h5' style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>May 2021</span> <br />
            College Station, Texas <br />
            Bachelor of Science in Computer Science <br />
            Minor in Communications
          </p>
        </Container>
      </Container>
    </>
  );
}
