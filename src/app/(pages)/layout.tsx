import MyNav from "@/components/MyNav";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MyNav />
      <div>{children}</div>
    </>
  );
}
