'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import styles from '@/styles/apollo.module.css';

interface Photo {
  url: string;
  altText: string;
  caption?: string;
  order: number;
}

interface TabData {
  key: string;
  title: string;
  photos: Photo[];
}

const BREAKPOINTS = [
  { query: '(min-width: 1400px)', cols: 4 },
  { query: '(min-width: 992px)',  cols: 3 },
  { query: '(min-width: 576px)',  cols: 2 },
];

// Maps a full-res photo path to its generated thumbnail. Contract: thumbs
// live in a `thumbs/` subfolder as .jpeg, produced by scripts/generate-thumbnails.mjs.
function thumbSrc(url: string): string {
  const slash = url.lastIndexOf('/');
  if (slash === -1) return url; // no directory segment — nothing to rewrite
  const dir = url.slice(0, slash);
  const file = url.slice(slash + 1);
  const base = file.replace(/\.[^.]+$/, '');
  return `${dir}/thumbs/${base}.jpeg`;
}

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

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<Element | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement;
    closeRef.current?.focus();

    // Lock background scroll while the lightbox is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        e.preventDefault(); // only one focusable element — keep focus pinned
        closeRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      (previousFocus.current as HTMLElement | null)?.focus();
    };
  }, [onClose]);

  return (
    <div className={styles.lightboxOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <button ref={closeRef} className={styles.lightboxClose} onClick={onClose} aria-label="Close">
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        className={styles.lightboxImage}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

function PhotoCard({ photo, onOpen }: { photo: Photo; onOpen: (photo: Photo) => void }) {
  const rotation = ((photo.order * 137.508) % 40) / 10 - 2;
  return (
    <div
      className={`${styles.photoCard}${photo.caption ? '' : ' ' + styles.photoCardNoCaption}`}
      style={{ '--card-rotation': `${rotation}deg` } as React.CSSProperties}
      onClick={() => onOpen(photo)}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onOpen(photo); }}
      aria-label={`View full size: ${photo.altText}`}
    >
      <img
        src={thumbSrc(photo.url)}
        alt={photo.altText}
        className={styles.photoImage}
        loading="lazy"
        decoding="async"
      />
      {photo.caption && <p className={styles.photoCaption}>{photo.caption}</p>}
    </div>
  );
}

function Gallery({ photos, onOpen }: { photos: Photo[]; onOpen: (photo: Photo) => void }) {
  const numCols = useColumnCount();
  const sorted = [...photos].sort((a, b) => a.order - b.order);

  const columns: Photo[][] = Array.from({ length: numCols }, () => []);
  sorted.forEach((photo, i) => columns[i % numCols].push(photo));

  return (
    <div className={styles.masonryGrid}>
      {columns.map((col, i) => (
        <div key={i} className={styles.masonryColumn}>
          {col.map(photo => <PhotoCard key={photo.order} photo={photo} onOpen={onOpen} />)}
        </div>
      ))}
    </div>
  );
}

export default function ApolloTabs({ tabs }: { tabs: TabData[] }) {
  const allPhotos = tabs.flatMap(tab => tab.photos);
  const [activeKey, setActiveKey] = useState('all');
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const openLightbox = useCallback((photo: Photo) => setLightbox(photo), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <Container fluid="md" style={{ padding: '2rem 1rem' }}>
      <Tabs
        id="apollo-tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k ?? 'all')}
        className="mb-3"
      >
        <Tab eventKey="all" title="Apollo">
          <Gallery photos={allPhotos} onOpen={openLightbox} />
        </Tab>
        {tabs.map(tab => (
          <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
            <Gallery photos={tab.photos} onOpen={openLightbox} />
          </Tab>
        ))}
      </Tabs>
      {lightbox && (
        <Lightbox src={lightbox.url} alt={lightbox.altText} onClose={closeLightbox} />
      )}
    </Container>
  );
}
