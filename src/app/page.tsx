import type { Metadata } from 'next';
import LandingPage from "@/components/LandingPage"
import '../styles/landingPage.css';

export const metadata: Metadata = {
  title: 'Wesley Till',
  description: 'Personal portfolio of Wesley Till — software engineer based in Fort Collins, CO.',
};

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
