import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import styles from '@/styles/navbar.module.css';

const Footer = () => {

  return (
    <Navbar sticky="bottom" data-bs-theme="light" className={`${styles.bar} ${styles.barBottom}`}>
      <Container>
        <Nav fill>
          <NavLink href="https://github.com/Wosty/Wosty.github.io" target="_blank" rel="noopener noreferrer" className={`${styles.link} px-4`}>GitHub for this Website</NavLink>
          <NavLink href="mailto:info@wesleytill.com" className={`${styles.link} px-4`}>Email Me</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
