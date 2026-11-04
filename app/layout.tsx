import type { Metadata } from "next";
import "./globals.css";
import "./experience.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "SME Data Readiness | A practical transformation plan",
    template: "%s | SME Data Readiness"
  },
  description:
    "A private, browser-based SME data readiness self-assessment with transparent scoring, risk flags, and a practical improvement roadmap.",
  keywords: ["SME data readiness", "business data assessment", "data maturity", "small business transformation"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "SME Data Readiness",
    description: "Find practical improvements for how your business uses data.",
    siteName: "SME Data Readiness"
  },
  twitter: {
    card: "summary_large_image",
    title: "SME Data Readiness",
    description: "Find practical improvements for how your business uses data."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/favicon.svg"
  },
  category: "business"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
