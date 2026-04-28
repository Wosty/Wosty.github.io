//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import type { Metadata } from "next";
import Header from "@/components/Header"
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: {
    default: 'Wesley Till',
    template: '%s | Wesley Till',
  },
  description: 'Personal portfolio of Wesley Till — software engineer based in Austin, TX.',
  metadataBase: new URL('https://wesleytill.com'),
  openGraph: {
    siteName: 'Wesley Till',
    description: 'Personal portfolio of Wesley Till — software engineer based in Austin, TX.',
    images: [{ url: '/prof.jpeg' }],
  },
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
        {children}
      </body>
    </html>
  )
}