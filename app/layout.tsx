import type { ReactElement } from "react";
import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finna — Systems Builder",
  description:
    "Building systems that help businesses grow. From internal operations and business management platforms to automation tools and customer-facing applications.",
  openGraph: {
    title: "Build your systems with us",
    description:
      "Building systems that help businesses grow.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finna — Systems Builder",
    description: "Building systems that help businesses grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bone text-ink antialiased font-inter">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}