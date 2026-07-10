import type { Metadata } from 'next';
import TrailMap, { type Stop } from '@/components/about/TrailMap';
import trailStops from '@/data/trail-stops.json';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Wesley Till — software engineer based in Fort Collins, CO.',
};

export default function About() {
  return <TrailMap stops={trailStops as Stop[]} title="The trail" />;
}
