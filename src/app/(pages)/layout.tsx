import Footer from "@/components/Footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
