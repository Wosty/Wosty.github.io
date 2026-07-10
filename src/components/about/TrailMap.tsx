'use client'
import React from 'react';
import MountainBackdrop from '@/components/MountainBackdrop';
import { useVisible } from '@/hooks/useVisible';
import styles from '@/styles/trailMap.module.css';

export interface Stop {
  year: string;
  title: string;
  blurb: string;
  kind: 'career' | 'place' | 'project';
  photo: string | null;
  alt: string | null;
}

const KIND_COLOR: Record<Stop['kind'], string> = {
  career: 'var(--tm-hot)',
  place: 'var(--tm-cool)',
  project: 'var(--tm-sun)',
};
const KIND_GLYPH: Record<Stop['kind'], string> = { career: '★', place: '▲', project: '☀' };

// ── Stop card ──────────────────────────────────────────────────
function StopCard({ stop, onRight }: { stop: Stop; onRight: boolean }) {
  const { ref, visible } = useVisible();

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles.reveal} ${visible ? styles.revealVisible : ''}`}
      style={{ '--rx': `${onRight ? -20 : 20}px` } as React.CSSProperties}
    >
      <div className={styles.cardMedia}>
        {stop.photo ? (
          <img
            className={styles.cardImg}
            src={stop.photo}
            alt={stop.alt ?? `${stop.title}, ${stop.year}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.cardPlaceholder}>[ photo · {stop.year} ]</div>
        )}
        <div className={styles.cardTape} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>{KIND_GLYPH[stop.kind]} {stop.year} · {stop.kind}</div>
        <div className={styles.cardTitle}>{stop.title}</div>
        <div className={styles.cardBlurb}>{stop.blurb}</div>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────
export default function TrailMap({
  stops,
  title = 'The trail',
  subtitle = 'a guided hike through —',
  headerNum = '№ 001 — TRAIL GUIDE',
}: {
  stops: Stop[];
  title?: string;
  subtitle?: string;
  headerNum?: string;
}) {
  const { ref: headerRef, visible: headerVisible } = useVisible(0.2);
  const { ref: legendRef, visible: legendVisible } = useVisible(0.15);
  const { ref: youAreHereRef, visible: youAreHereVisible } = useVisible(0.5);

  // Highlight the last word of the title — generic, no hardcoded strings.
  const words = title.trim().split(/\s+/);
  const emphasis = words.pop() ?? title;
  const lead = words.join(' ');

  return (
    <div className={styles.page}>
      <MountainBackdrop height={180} />

      {/* Spinning sun */}
      <div className={styles.sun}>
        <svg viewBox="0 0 80 80" width="44" height="44" aria-hidden="true">
          <circle cx="40" cy="40" r="22" fill="var(--tm-sun)" opacity="0.85" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="40" y1="40" x2="40" y2="6" stroke="var(--tm-sun)" strokeWidth="3" strokeLinecap="round" transform={`rotate(${i * 30} 40 40)`} />
          ))}
        </svg>
      </div>

      <div className={styles.content}>

        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.header} ${styles.reveal} ${headerVisible ? styles.revealVisible : ''}`}
          style={{ '--ry': '12px' } as React.CSSProperties}
        >
          <div className={styles.headerNum}>{headerNum}</div>
          <div className={styles.subtitle}>{subtitle}</div>
          <h1 className={styles.title}>
            {lead && <>{lead}{' '}</>}
            <span className={styles.titleEmphasis}>{emphasis}</span>
            <span className={styles.titleDot}>.</span>
          </h1>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.trailLine} />

          <div className={styles.labelRow}>
            <span className={styles.label}>▼ TRAILHEAD</span>
          </div>

          {stops.map((stop, i) => {
            const onRight = i % 2 === 0;
            return (
              <div
                key={i}
                className={`${styles.stop} ${onRight ? styles.stopRight : styles.stopLeft}`}
                style={{ '--accent': KIND_COLOR[stop.kind] } as React.CSSProperties}
              >
                <div className={styles.marker}><span className={styles.dot} /></div>
                <StopCard stop={stop} onRight={onRight} />
              </div>
            );
          })}

          <div
            ref={youAreHereRef}
            className={`${styles.labelRow} ${styles.labelRowEnd} ${styles.reveal} ${youAreHereVisible ? styles.revealVisible : ''}`}
          >
            <span className={`${styles.label} ${youAreHereVisible ? styles.labelBob : ''}`}>↓ YOU ARE HERE</span>
          </div>
        </div>

        {/* Legend */}
        <div
          ref={legendRef}
          className={`${styles.legend} ${styles.reveal} ${legendVisible ? styles.revealVisible : ''}`}
          style={{ '--ry': '12px' } as React.CSSProperties}
        >
          <div className={styles.legendTitle}>★ MAP LEGEND ★</div>
          <div className={styles.legendGrid}>
            <span><span className={styles.swatchHot}>★</span> career</span>
            <span><span className={styles.swatchCool}>▲</span> places</span>
            <span><span className={styles.swatchSun}>☀</span> projects</span>
            <span><span className={styles.swatchPath}>┄┄</span> the path</span>
          </div>
        </div>
      </div>
    </div>
  );
}
