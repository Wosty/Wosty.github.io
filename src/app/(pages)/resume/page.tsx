import { Row, Col, Container } from "react-bootstrap";

export default function Resume() {
  return (
    <>
      <Container style={{ padding: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>Wesley Till</h1>
        <hr />
        <Container>
          <Row>
            <h2>SUMMARY</h2>
            <p>A dedicated software engineer passionate about tackling complex challenges and driving innovative solutions. With a strong foundation in various programming languages and technologies, I excel in creating efficient, scalable software systems. Known for my ability to foster teamwork, I leverage collaborative efforts to achieve customer-centric results. My proactive approach to problem-solving and continuous learning empowers me to contribute significantly to software engineering teams, aiming for excellence in every project.</p>
          </Row>
          <br />
          <Row>
            <h2>EXPERIENCE</h2>
            <h4 style={{ alignContent: "left" }}>Software Engineer II</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>Dell Technologies</h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>August 2021 - Present</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Led the modernization of the search team's codebase to address evolving business needs, focusing on workflow optimization, adopting inclusive language, and mitigating security vulnerabilities, thereby ensuring compliance with industry standards.</li>
                  <li>Pioneered framework enhancements and integration projects, boosting system resilience and scalability, and strategically reducing risks and downtimes.</li>
                  <li>Established a rigorous unit testing framework, markedly elevating code reliability and diminishing production defects.</li>
                </ul>
              </Col>
            </Row>
            <h4 style={{ alignContent: "left" }}>Help Desk Student Technician</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>The Bush School of Government and Public Service </h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>June 2019 - May 2021</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Efficiently resolved technical issues for users, employing advanced troubleshooting techniques and ensuring high satisfaction levels.</li>
                  <li>Played a key role in the IT Department's audit preparation, meticulously organizing data and systems to meet stringent compliance standards.</li>
                </ul>
              </Col>
            </Row>
            <h4 style={{ alignContent: "left" }}>Software Engineering Intern</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>Dell Technologies</h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>June 2020 - July 2020</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Engineered a cutting-edge microcomponent from the ground up, seamlessly integrated with Dell's internal web platform to facilitate efficient pattern-matching search functionalities.</li>
                </ul>
              </Col>
            </Row>
            <h4 style={{ alignContent: "left" }}>Peer Teacher</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>ENGR 102 (Intro to Computation) </h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>August 2018 - May 2019</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Enhanced student learning by providing expert assistance during classes, fielding questions, and offering feedback on assignments, contributing to a supportive educational environment.</li>
                </ul>
              </Col>
            </Row>
            <h4 style={{ alignContent: "left" }}>Independent Student Research</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>CyberHealthGIS Research Experience for Undergraduates </h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>May - August 2018</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Conceptualized and developed a prototype Geographical Information System (GIS) to support firefighter operations, showcasing innovation in emergency response tools.</li>
                </ul>
              </Col>
            </Row>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>AggiE_Challenge</h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>January - December 2018</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Collaboratively designed and executed a research project focused on analyzing running technique quality through accelerometer data from FitBit devices, demonstrating teamwork and analytical skills.</li>
                </ul>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>SKILLS</h2>
          <p><span style={{ fontWeight: "bold" }}>Programming Languages: </span>C#, JavaScript, Python, C++, and Java <br />
            <span style={{ fontWeight: "bold" }}>Development Tools: </span>.NET, React, Git, Kubernetes, Elasticsearch</p>
          <br />
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
