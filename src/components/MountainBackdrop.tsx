import styles from '@/styles/mountainBackdrop.module.css';

/**
 * Layered mountain-silhouette backdrop — the site's shared "field guide"
 * atmosphere, extracted from the About trail map so any page can reuse it
 * (see REFACTOR_NOTES §3.6). Fills come from theme tokens; nothing is
 * hardcoded. Renders behind content and is inert to pointer/AT.
 */
export default function MountainBackdrop({
  height = 180,
  className,
}: {
  height?: number;
  className?: string;
}) {
  return (
    <svg
      className={`${styles.backdrop}${className ? ` ${className}` : ''}`}
      style={{ height }}
      viewBox="0 0 400 180"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g opacity="0.15">
        <path d="M0 180 L40 90 L100 130 L200 20 L300 100 L360 55 L400 90 L400 180 Z" fill="var(--color-accent-2)" />
        <path d="M200 20 L230 55 L215 55 Z" fill="var(--color-surface)" />
        <path d="M360 55 L378 78 L368 78 Z" fill="var(--color-surface)" />
      </g>
      <g opacity="0.08">
        <path d="M0 180 L80 130 L180 155 L280 105 L380 140 L400 125 L400 180 Z" fill="var(--color-ink)" />
      </g>
    </svg>
  );
}
