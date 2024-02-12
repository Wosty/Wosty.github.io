import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import { MouseEvent, SetStateAction } from 'react';
import { useState, useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { CardBody } from 'react-bootstrap';

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

  const [open, setOpen] = useState(false);

  const [color, setColor] = useState("")
  const click = (color: string) => {
    setColor(color)
  }

  const [uncolor, unsetColor] = useState("")
  const unclick = (color: string) => {
    setColor(color)
  }
  /* This is where we actually
     change background color */
  useEffect(() => {
    console.log("did something")
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "50% 20%"
    document.body.style.backgroundImage = color
  }, [color])

  useEffect(() => {
    console.log("did something")
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "50% 20%"
    document.body.style.backgroundImage = color
  }, [uncolor])

  function mouseEnterNav(navTab: string) {
    //document.getElementById("tabPreview")!.src = "yeah boi"
    click("url(apollo.jpeg)")
    setOpen(true)
  }
  function mouseExitNav(navTab: string) {
    unclick("")
    setOpen(false)
    //document.getElementById("tabPreview")!.innerHTML = "landing page ig"
  }

  return (
    <>
      <Nav className="justify-content-center" fill variant="tabs">
        <Nav.Item
          onMouseEnter={e => mouseEnterNav("home")}
          onMouseLeave={e => mouseExitNav("home")}
          aria-controls="tabPreview"
          aria-expanded={false}>
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
      <Button onClick={
        () => click("url(apollo.jpeg)")
      }>
        hi
      </Button>
      <Fade in={open}>
        <Container id="tabPreview" fluid>
          <Card>
            {/* <Card.Img src="apollo.jpeg" className="h-100" />; */}
          </Card>
        </Container>
      </Fade>
    </>
  );
}

export default MyHeader;