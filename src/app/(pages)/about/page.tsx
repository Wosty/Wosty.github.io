import type { Metadata } from 'next';
import Container from "react-bootstrap/Container";

export const metadata: Metadata = {
  title: 'About',
  description: 'About Wesley Till — software engineer based in Austin, TX.',
};

export default function About() {
  return (
    <>
      <Container>
        <h1>about</h1>
        <hr />
      </Container>
    </>
  );
}
