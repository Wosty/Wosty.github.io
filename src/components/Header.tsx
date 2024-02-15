import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MouseEvent, SetStateAction } from 'react';
import { useState, useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';
// import Image from 'next/image';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { CardBody } from 'react-bootstrap';
import styles from '@/styles/background.module.css'
import apollo from '../../public/apollo.jpeg'

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
    document.body.style.transitionProperty = "background-image"
    document.body.style.transitionDuration = "1s"
    document.body.style.transitionTimingFunction = "linear"
  }, [uncolor])

  function mouseEnterNav(navTab: string) {
    //document.getElementById("tabPreview")!.src = "yeah boi"
    click("url(apollo.jpeg)")
    setOpen(true)
  }
  function mouseExitNav(navTab: string) {
    unclick("url(backdrop.jpeg)")
    setOpen(false)
    //document.getElementById("tabPreview")!.innerHTML = "landing page ig"
  }

  return (
    <>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <Nav className="justify-content-center" fill variant="tabs" style={{ padding: "5px 5px 0px 5px" }}>
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
      </div>
      {/* <Button onClick={
        () => click("url(apollo.jpeg)")
      }>
        hi
      </Button> */}
      {/* <Fade in={open}>
        <Container className="align-items-center" fluid id="tabPreview">
          <Card style={{
            width: '18rem',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}>
            <Card.Img src="apollo.jpeg"
              variant="top" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
        <div id="tabPreview" className={styles.bgWrap}>
          <Image
            alt="Mountains"
            src={apollo}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }}
          />
      </div>
      </Fade > */}

    </>
  );
}

export default MyHeader;