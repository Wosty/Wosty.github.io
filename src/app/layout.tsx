import "../styles/styles.scss";
import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/data/site";

// Self-hosted webfonts exposed site-wide as CSS variables. The theme
// tokens (theme.css) and Bootstrap headings (styles.scss) consume these.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: '/prof.jpeg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
