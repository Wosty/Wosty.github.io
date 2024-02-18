import { Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';

const Header = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="md" sticky='top' bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container fluid>
          <NavbarBrand href="#home">
            <img
              src="/apollo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className='me-auto'>
              <NavLink id="homeNav" href="/">Active</NavLink>
              <NavLink eventKey="link-1">Option 2</NavLink>
              <NavLink eventKey="disabled" disabled>
                Disabled
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>

      </Navbar>
    </>
  );
}

export default Header;