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
import styles from '@/styles/background.module.css'
import apollo from '../../public/apollo.jpeg'

function LandingPage() {
    return (
        <Container className="align-items-center" fluid id="tabPreview">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{
                        width: '18rem'
                    }}
                        className="text-center">
                        <Card.Img src="apollo.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem'
                    }}>
                        <Card.Img src="apollo.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem'
                    }}>
                        <Card.Img src="apollo.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{
                        width: '18rem'
                    }}>
                        <Card.Img src="apollo.jpeg"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
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