'use client'
import { useState, useEffect } from 'react'
import LandingPage from "@/components/LandingPage"
import '../styles/landingPage.css';

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <LandingPage />
    </>
  );
}

