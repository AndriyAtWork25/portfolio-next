import type { Metadata } from "next";
import "./globals.css";

/*
  Metadata = Informationen über die Website
  Diese Daten sind wichtig für:
  - Browser-Tab Titel
  - SEO
  - Social Sharing
  - Favicon
*/

export const metadata: Metadata = {
  title: "Andriy Tsar | Backend Developer Portfolio",
  description:
    "Backend-focused developer portfolio built with Next.js, TypeScript and modern UI design.",
  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
