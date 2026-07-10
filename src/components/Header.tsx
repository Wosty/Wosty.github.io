'use client'
import Link from 'next/link';
import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import styles from '@/styles/navbar.module.css';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="md" sticky="top" data-bs-theme="light" className={`${styles.bar} me-auto justify-content-between`}>
      <Container fluid>
        <NavbarBrand as={Link} href="/">
          <img
            src="/apollo_icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Apollo icon — home"
          />
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1 justify-content-evenly">
            <NavLink as={Link} href="/resume" className={styles.link}>Professional Experience</NavLink>
            <NavLink as={Link} href="/about" className={styles.link}>About Me</NavLink>
            <NavLink as={Link} href="/apollo" className={styles.link}>Apollo&apos;s Gallery</NavLink>
            <NavLink href="https://github.com/Wosty" target="_blank" rel="noopener noreferrer" className={styles.link}>Personal GitHub <i className="bi bi-box-arrow-up-right" /></NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Header;
