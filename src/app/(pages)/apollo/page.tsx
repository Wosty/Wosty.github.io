'use client'
import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import apolloData from '@/data/apollo.json';
import styles from '@/styles/apollo.module.css';

interface Photo {
  url: string;
  altText: string;
  caption?: string;
  order: number;
}

const BREAKPOINTS = [
  { query: '(min-width: 1400px)', cols: 4 },
  { query: '(min-width: 992px)',  cols: 3 },
  { query: '(min-width: 576px)',  cols: 2 },
];

function useColumnCount() {
  const [numCols, setNumCols] = useState(1);

  useEffect(() => {
    const mqs = BREAKPOINTS.map(bp => ({ mq: window.matchMedia(bp.query), cols: bp.cols }));
    const update = () => {
      const match = mqs.find(({ mq }) => mq.matches);
      setNumCols(match?.cols ?? 1);
    };
    update();
    mqs.forEach(({ mq }) => mq.addEventListener('change', update));
    return () => mqs.forEach(({ mq }) => mq.removeEventListener('change', update));
  }, []);

  return numCols;
}

function PhotoCard({ photo }: { photo: Photo }) {
  // golden angle distribution — works for any number of cards without manual tuning
  const rotation = ((photo.order * 137.508) % 40) / 10 - 2;
  return (
    <div
      className={`${styles.photoCard}${photo.caption ? '' : ' ' + styles.photoCardNoCaption}`}
      style={{ '--card-rotation': `${rotation}deg` } as React.CSSProperties}
    >
      <img src={photo.url} alt={photo.altText} className={styles.photoImage} />
      {photo.caption && <p className={styles.photoCaption}>{photo.caption}</p>}
    </div>
  );
}

function Gallery({ photos }: { photos: Photo[] }) {
  const numCols = useColumnCount();
  const sorted = [...photos].sort((a, b) => a.order - b.order);

  const columns: Photo[][] = Array.from({ length: numCols }, () => []);
  sorted.forEach((photo, i) => columns[i % numCols].push(photo));

  return (
    <div className={styles.masonryGrid}>
      {columns.map((col, i) => (
        <div key={i} className={styles.masonryColumn}>
          {col.map(photo => <PhotoCard key={photo.order} photo={photo} />)}
        </div>
      ))}
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
