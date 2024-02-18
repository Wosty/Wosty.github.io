import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MouseEvent, SetStateAction } from 'react';
import { useState, useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';
// import Image from 'next/image';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { CardBody, Row, Col } from 'react-bootstrap';
import animations from '@/styles/animations.module.css'
import apollo from '../../public/apollo.jpeg'

const LandingPage = () => {

    return (
        <Container fluid="md" style={{ padding: '1rem' }} id="tabPreview">
            <Row className='g-5 d-flex align-items-center' xs={1} md={4}>
                <Col className='d-flex align-items-stretch'>
                    <Card className={animations.floatUp} style={{ animationDelay: "1s" }}>
                        <Card.Img src="prof.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Professional Experience</Card.Title>
                            <Card.Text>
                                Explore my professional journey and qualifications in my comprehensive resume.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='g-5 d-flex align-items-stretch'>
                    <Card className={animations.floatUp} style={{ animationDelay: "1.25s" }}>
                        <Card.Img src="personal.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                                Discover more about my passions and my journey to get a better understanding of who I am.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={animations.floatUp} style={{ animationDelay: "1.5s" }}>
                        <Card.Img src="backdrop.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Links and Contact</Card.Title>
                            <Card.Text>
                                Explore my portfolio and professional profiles as well as direct contact information.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={animations.floatUp} style={{ animationDelay: "1.75s" }}>
                        <Card.Img src="apollo.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Apollo</Card.Title>
                            <Card.Text>
                                Get to know my dog, Apollo, with a charming gallery showcasing his adorable moments.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPage;