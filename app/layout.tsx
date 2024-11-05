import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitghosh.vercel.app/"),
  alternates: {
    canonical: "https://sumitghosh.vercel.app/",
  },
  title: "Sumit Ghosh - Full Stack Developer",
  description:
    "Sumit Ghosh is a Full stack developer, expertise in MERN stack and team building",
  keywords:
    "Sumit Ghosh, Frontend Developer, Full Stack Developer, EdTech, SaaS, JavaScript, RectJs, NextJs, TypeScript, NodeJs, MongoDB, The Product Platform, Khambee, GreetsU, Technology, Innovation, Team building",
  openGraph: {
    locale: "en_US",
    siteName: "Sumit Ghosh",
    type: "website",
    title: "Sumit Ghosh",
    description:
      "Sumit Ghosh is a Full stack developer, expertise in MERN stack and team building",
    url: "https://sumitghosh.vercel.app/",
    images: [
      {
        url: "./avatar.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
