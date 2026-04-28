import Footer from "@/components/Footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      {children}
      <Footer />
    </>
  );
}
