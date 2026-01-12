import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imran Bezdrob | Elite Personal Training Sarajevo",
  description: "Transform your body with Imran Bezdrob - Sarajevo's premier personal trainer specializing in glute transformation programs. 1:1 training, online coaching & expert team.",
  keywords: ["personal trainer", "Sarajevo", "glute program", "fitness", "online coaching", "1:1 training", "Imran Bezdrob"],
  authors: [{ name: "Imran Bezdrob" }],
  openGraph: {
    title: "Imran Bezdrob | Elite Personal Training",
    description: "Transform your body with Sarajevo's premier personal trainer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
