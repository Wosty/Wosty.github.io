import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  return (
    <>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <Nav className="justify-content-center" fill variant="tabs" style={{ padding: "5px 5px 0px 5px" }}>
          <Nav.Item>
            <Nav.Link id="homeNav" href="/">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default Header;