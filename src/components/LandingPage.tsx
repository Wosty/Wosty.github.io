import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import animations from '@/styles/animations.module.css'

const LandingPage = () => {

    return (
        <Container fluid="md" style={{ padding: '2rem 1rem' }}>
            <Row className='g-5 d-flex align-items-center' xs={1} sm={2} md={4}>
                <Col>
                    <Card className={animations.floatUp + " text-center"} style={{ animationDelay: "1s" }}>
                        <Card.Img src="prof.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Professional Experience</Card.Title>
                            <Card.Text>
                                Explore my professional journey and qualifications in my comprehensive resume.
                            </Card.Text>
                            <Button variant="primary" href="/resume">View My Resume</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={animations.floatUp + " text-center"} style={{ animationDelay: "1.25s" }}>
                        <Card.Img src="personal.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>About Me (Coming Soon)</Card.Title>
                            <Card.Text>
                                Discover more about my passions and my journey to get a better understanding of who I am.
                            </Card.Text>
                            <Button variant="primary" href="/about" disabled>Learn More About Me</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={animations.floatUp + " text-center"} style={{ animationDelay: "1.5s" }}>
                        <Card.Img src="apollo.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Apollo (Coming Soon)</Card.Title>
                            <Card.Text>
                                Get to know my dog, Apollo, with a charming gallery showcasing his adorable moments.
                            </Card.Text>
                            <Button variant="primary" href="/apollo" disabled>Browse Apollo's Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={animations.floatUp + " text-center"} style={{ animationDelay: "1.75s" }}>
                        <Card.Img src="github.png"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>My GitHub</Card.Title>
                            <Card.Text>
                                Explore my GitHub, showcasing some personal projects that I have worked on including this website.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/Wosty" target="_blank" rel="noopener noreferrer">Visit my Personal GitHub <i className="bi bi-box-arrow-up-right" /> </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPage;