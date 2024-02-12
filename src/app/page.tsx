'use client'
import { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Header from "@/components/Header";

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <Header />

    </>
  );
}

