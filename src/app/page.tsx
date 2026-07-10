import type { Metadata } from 'next';
import LandingPage from "@/components/LandingPage";
import { SITE_NAME, SITE_DESCRIPTION } from "@/data/site";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return <LandingPage />;
}
