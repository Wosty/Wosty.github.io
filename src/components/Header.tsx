import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import { MouseEvent } from 'react';
import { useState, useEffect } from 'react';

const MyHeader: React.FC = (initialData) => {
  // const [dynamicData, setDynamicData] = useState(initialData);
  // useEffect(() => {
  //   // Simulating an update to dynamic data after the component has mounted
  //   const clickHandler = (e: MouseEvent): void => {
  //     e.preventDefault();
  //     alert(`Clicked at ${e.pageX} ${e.pageY}`);
  //   };

  //   return;
  // }, []);

  return (
    <>
      <Nav className="justify-content-center" fill variant="tabs">
        <Nav.Item
          onMouseEnter={e => document.getElementById("landingPageText")!.innerHTML = "yeah boi"}
          onMouseLeave={e => document.getElementById("landingPageText")!.innerHTML = "landing page ig"}>
          <Nav.Link id="homeNav" href="/home">Active</Nav.Link>
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
      <Container>
        <h1 id="landingPageText" >landing page?</h1>
        <hr />
      </Container>
    </>
  );
}

export default MyHeader;