'use client'
import { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import apolloData from '@/data/apollo.json';
import styles from '@/styles/apollo.module.css';

interface Photo {
  url: string;
  altText: string;
  caption?: string;
  order: number;
}

function PhotoCard({ photo }: { photo: Photo }) {
  // golden angle distribution — works for any number of cards without manual tuning
  const rotation = ((photo.order * 137.508) % 40) / 10 - 2;
  return (
    <div
      className={`${styles.photoCard}${photo.caption ? '' : ' ' + styles.photoCardNoCaption}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img src={photo.url} alt={photo.altText} className={styles.photoImage} />
      {photo.caption && <p className={styles.photoCaption}>{photo.caption}</p>}
    </div>
  );
}

function Gallery({ photos }: { photos: Photo[] }) {
  const sorted = [...photos].sort((a, b) => a.order - b.order);
  return (
    <div className={styles.masonryGrid}>
      {sorted.map(photo => <PhotoCard key={photo.order} photo={photo} />)}
    </div>
  );
}

const allPhotos: Photo[] = apolloData.tabs.flatMap(tab => tab.photos);

export default function Apollo() {
  const [activeKey, setActiveKey] = useState('all');

  return (
    <Container fluid="md" style={{ padding: '2rem 1rem' }}>
      <Tabs
        id="apollo-tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k ?? 'all')}
        className="mb-3"
      >
        <Tab eventKey="all" title="Apollo">
          <Gallery photos={allPhotos} />
        </Tab>
        {apolloData.tabs.map(tab => (
          <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
            <Gallery photos={tab.photos} />
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
}
