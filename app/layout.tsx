import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rosarios Little Flower",
  description: "Control de pedidos, materiales y reliquias producidas.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/logo-little-flower-192.png",
    shortcut: "/logo-little-flower-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
