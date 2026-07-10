'use client'
import { useState, useEffect, useRef } from 'react';

/**
 * Reveal-on-scroll helper. Returns a ref to attach to an element and a
 * `visible` flag that flips true (once) when the element scrolls into view.
 * Generic and reusable across pages.
 */
export function useVisible<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}
