//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import type { Metadata } from "next";
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Wesley Till",
  description: "Wesley Till | Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  )
}