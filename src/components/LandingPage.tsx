'use client'
import Link from 'next/link';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import MountainBackdrop from '@/components/MountainBackdrop';
import animations from '@/styles/animations.module.css';

interface Destination {
  img: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  external?: boolean;
  accent: string; // theme token for the card's hard shadow
}

const DESTINATIONS: Destination[] = [
  {
    img: '/prof.jpeg',
    title: 'Professional Experience',
    text: 'Explore my professional journey and qualifications in my comprehensive resume.',
    cta: 'View My Resume',
    href: '/resume',
    accent: 'var(--color-accent)',
  },
  {
    img: '/personal.jpeg',
    title: 'About Me',
    text: 'Discover more about my passions and my journey to get a better understanding of who I am.',
    cta: 'Learn More About Me',
    href: '/about',
    accent: 'var(--color-accent-2)',
  },
  {
    img: '/apollo.jpeg',
    title: 'Apollo',
    text: 'Get to know my dog, Apollo, with a charming gallery showcasing his adorable moments.',
    cta: "Browse Apollo's Gallery",
    href: '/apollo',
    accent: 'var(--color-accent-3)',
  },
  {
    img: '/github.png',
    title: 'My GitHub',
    text: 'Explore my GitHub, showcasing some personal projects that I have worked on including this website.',
    cta: 'Visit my Personal GitHub',
    href: 'https://github.com/Wosty',
    external: true,
    accent: 'var(--color-ink)',
  },
];

const LandingPage = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <MountainBackdrop height={220} />
      <Container fluid="md" style={{ position: 'relative', zIndex: 1, padding: '2rem 1rem' }}>
        <Row className="g-5 d-flex align-items-center" xs={1} sm={2} md={4}>
          {DESTINATIONS.map((dest, i) => (
            <Col key={dest.href}>
              <Card
                className={`${animations.floatUp} paper-card text-center`}
                style={{
                  animationDelay: `${1 + i * 0.25}s`,
                  '--card-accent': dest.accent,
                } as React.CSSProperties}
              >
                <Card.Img src={dest.img} variant="top" />
                <Card.Body>
                  <Card.Title>{dest.title}</Card.Title>
                  <Card.Text>{dest.text}</Card.Text>
                  {dest.external ? (
                    <Button variant="primary" href={dest.href} target="_blank" rel="noopener noreferrer">
                      {dest.cta} <i className="bi bi-box-arrow-up-right" />
                    </Button>
                  ) : (
                    <Link className="btn btn-primary" href={dest.href}>
                      {dest.cta}
                    </Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
