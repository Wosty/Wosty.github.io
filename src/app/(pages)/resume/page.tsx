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
            <p>A dedicated software engineer passionate about tackling complex challenges and driving innovative solutions. With a strong foundation in various programming languages and technologies, I excel in creating efficient, scalable software systems. Known for my ability to foster teamwork, I leverage collaborative efforts to achieve customer-centric results. My proactive approach to problem-solving and continuous learning empowers me to contribute significantly to software engineering teams.</p>
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
                  <li>Collaborated on a team managing Dell.com's search functionality, handling approximately 4 million monthly requests for a seamless high-traffic user search experience on a high-traffic website.</li>
                  <li>Engineered and managed a full-stack application to boost search relevancy with data insights, leading to a 15% increase in the average rank of the clicked product.</li>
                  <li>Led an initiative improving DevOps assessment scores across 18 codebases by addressing vulnerabilities and code quality non-compliance, enhancing system security and reliability.</li>
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
                  <li>Efficiently resolved technical issues for users, employing advanced troubleshooting techniques and ensuring high satisfaction levels with an average ticket response time of less than 1 business day.</li>
                  <li>Played a key role in the IT Department's audit preparation, organizing data and over 200 systems to meet stringent compliance standards for a government run institution.</li>
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
                  <li>Enhanced student learning by providing assistance during classes, fielding questions, and offering feedback on assignments, contributing to a supportive educational environment for over 100 students.</li>
                </ul>
              </Col>
            </Row>
            <h4 style={{ alignContent: "left" }}>Independent Student Research</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>CyberHealthGIS Research Experience for Undergraduates</h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>May - August 2018</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Conceptualized and developed a prototype Geographical Information System (GIS) featuring a 3D model of a building highlighting firefighter positions using ArcGIS Maps SDK for JavaScript.</li>
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
          <Row>
            <h2>PROJECTS</h2>
            <h4 style={{ alignContent: "left" }}>Computer Science Capstone</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>ColorClimb - Computer Vision Tool for Indoor Rock Climbing</h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>January - May 2021</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Crafted an application employing computer vision technology on iOS to identify colored pathways of rock climbing holds, enhancing accessibility for vision-impaired climbers.</li>
                </ul>
              </Col>
            </Row>
            <h4 style={{ alignContent: "left" }}>TAMUhack</h4>
            <Col sm={12} md={6}>
              <h5 style={{ fontStyle: "italic" }}>Face Check - Facial Recognition for Classroom Attendance</h5>
            </Col>
            <Col sm={12} md={6}>
              <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>January 2019</h5>
            </Col>
            <Row>
              <Col>
                <ul>
                  <li>Integrated Microsoft Cognitive Services API into a Raspberry Pi 3, establishing a prototype for facial classification-based classroom attendance tracking.</li>
                </ul>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>SKILLS</h2>
          <p><span style={{ fontWeight: "bold" }}>Programming Languages: </span>C#, JavaScript, Python, C++, and Java <br />
            <span style={{ fontWeight: "bold" }}>Development Tools: </span>.NET, REST, React, Git, Kubernetes, Elasticsearch</p>
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
