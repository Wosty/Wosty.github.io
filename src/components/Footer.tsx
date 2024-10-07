import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';

const Footer = () => {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav fill>
            <NavLink href="https://github.com/Wosty/Wosty.github.io" className='px-4'>GitHub for this Website</NavLink>
            <NavLink href="mailto:info@wesleytill.com" className='px-4'>Email Me</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;