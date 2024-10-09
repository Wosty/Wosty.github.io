'use client'
import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import { Fade } from 'transitions-kit'
import { Container, Tab, Tabs, Col, Card, Row } from 'react-bootstrap';
import OrderedImageCard from '../../../components/OrderedImageCard';

function Apollo() {
  const [key, setKey] = useState('apollo');

  return (
    <Container fluid="md" style={{ padding: '2rem 1rem' }}>
      <script src=
        "https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" async>
      </script>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k ?? 'apollo')}
        className="mb-3"
      >
        <Tab eventKey="apollo" title="Apollo">
          <AllApollo></AllApollo>
        </Tab>
        <Tab eventKey="model" title="... the Model">
          <ModelApollo></ModelApollo>
        </Tab>
        <Tab eventKey="goober" title="... the Goober">
          <GooberApollo></GooberApollo>
        </Tab>
      </Tabs>
    </Container>
  );
}

const modelApollo: OrderedImageCard[] = [
  new OrderedImageCard('apollo/apollo_bone.jpeg', undefined, 'Apollo chewing on a bone', 1),
  new OrderedImageCard('apollo/apollo_blanket.jpeg', undefined, 'Apollo holding a blanket', 2),
  new OrderedImageCard('apollo/apollo_supervisor.jpeg', 'While working from home, Apollo is my productivity supervisor even if he sleeps on the job', 'Apollo laying under a desk with a plaque in front with the text \'Apollo, Wesley\'s Supervisor\'', 3),
  new OrderedImageCard('apollo/apollo_look.jpeg', undefined, 'Apollo standing foward looking straight at the camera', 5),
  new OrderedImageCard('apollo/apollo_fancy.jpeg', 'Sometimes he likes to remind you that he has the name of a god', 'Apollo laying on a couch with his front paws crossed', 7),
  new OrderedImageCard('apollo/apollo_side_snow.jpeg', undefined, 'Picture from behind Apollo looking to the right in snow', 10),
  new OrderedImageCard('apollo/apollo_portrait.jpeg', undefined, 'Apollo laying on carpet and facing the camera', 11)
]

const gooberApollo: OrderedImageCard[] = [
  new OrderedImageCard('apollo/apollo_cowboy.jpeg', 'Apollo says, "Howdy"', 'Apollo wearing a small fedora', 4),
  new OrderedImageCard('apollo/apollo_tongue.jpeg', undefined, 'Close up of Apollo laying down and looking back with his tongue slightly sticking out', 6),
  new OrderedImageCard('apollo/apollo_water.png', 'I took Apollo to Barton Springs in Austin and learned he does not like to swim', 'Apollo standing in water with wide eyes and ears pinned back', 8),
  new OrderedImageCard('apollo/apollo_first_snow.jpeg', 'Apollo\'s first time seeing snow', 'Apollo jumping in snow with a little snow on his snout', 9),
  new OrderedImageCard('apollo/apollo_shy.jpeg', undefined, 'Apollo laying on a couch with his paw covering his face', 12),
  new OrderedImageCard('apollo/apollo_snow_fun.jpeg', undefined, 'Apollo facing the camera, leaning to the left in the snow as if about to run towards the camera', 13),
  new OrderedImageCard('apollo/apollo_blur.jpeg', undefined, 'Close up, out of focus picture of Apollo with a small view of his front teeth', 14)
]

function AllApollo() {
  let elements: ReactElement[] = []
  modelApollo.concat(gooberApollo).sort((a, b) => a.imageOrder - b.imageOrder).forEach(element => {
    elements.push(element.buildCard())
  })
  return (
    <Row className='g-5 d-flex align-items-center' xs={1} sm={2} md={4}>{elements}</Row>
  );
}

function ModelApollo() {
  let elements: ReactElement[] = []
  modelApollo.sort((a, b) => a.imageOrder - b.imageOrder).forEach(element => {
    elements.push(element.buildCard())
  });
  return (
    <Row className='g-5 d-flex align-items-center' xs={1} sm={2} md={4}>{elements}</Row>
  );
}

function GooberApollo() {
  let elements: ReactElement[] = []
  gooberApollo.sort((a, b) => a.imageOrder - b.imageOrder).forEach(element => {
    elements.push(element.buildCard())
  });
  return (
    <Row data-masonry='{"percentPosition": true }' xs={1} sm={2} md={4}>
      {elements}
    </Row>
  );
}

export default Apollo;