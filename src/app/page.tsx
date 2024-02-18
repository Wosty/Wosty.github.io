'use client'
import { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import LandingPage from "@/components/LandingPage"
// import styles from '../styles/background.module.css';

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

