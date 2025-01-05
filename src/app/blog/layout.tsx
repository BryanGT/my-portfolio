import  Metadata from "next";

export const metadata: Metadata = {
  title: "Bryan's Blog",
  description: "Generated by create next app",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <ul>
          <li>Categoria 1</li>
          <li>Categoria 2</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
