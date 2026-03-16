import "./globals.css";

import { Providers } from "@/components/layout/Providers";
import { InitialSplash } from "@/components/common/InitialSplash";
import { constructMetadata } from "@/lib/site-config";
import { GeistMono } from "geist/font/mono";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = constructMetadata({
  title: "Om Thakkar — Portfolio",
  description: "CS student at UW-Madison. Founder @ Homey. Building things that matter.",
  icons: "/favicon.ico",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistMono.className} bg-background text-foreground antialiased selection:bg-primary/20`}
      >
        <Providers>
          <InitialSplash>{children}</InitialSplash>
        </Providers>
      </body>
    </html>
  );
}
