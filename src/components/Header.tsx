import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';

const Header = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="md" sticky='top' bg="dark" data-bs-theme="dark" className='me-auto justify-content-between'>
        <Container fluid>
          <NavbarBrand href="/">
            <img
              src="/apollo_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="flex-grow-1 justify-content-evenly">
              <NavLink href="/resume">Professional Experience</NavLink>
              <NavLink href="/about" disabled>About Me</NavLink>
              <NavLink href="/food" disabled>Food Blog</NavLink>
              <NavLink href="/apollo" disabled>Apollo's Gallery</NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;