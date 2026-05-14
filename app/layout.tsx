import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { LenisProvider } from "@/components/layouts/lenis-provider";
import { StackScene } from "@/components/layouts/stack-scene";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roundKey = localFont({
  src: [
    {
      path: "../public/fonts/thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-round-key",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synthetic Heart - Dr. Kishor K Tewary",
  description: "A high-end storytelling journey of love and deception.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roundKey.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-secondary-900 bg-secondary-950">
        <LenisProvider>
          <Header />
          <StackScene>
            <main className="flex-1">{children}</main>
            <Footer />
          </StackScene>
        </LenisProvider>
      </body>
    </html>
  );
}
