import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitghosh.vercel.app/"),
  alternates: {
    canonical: "https://sumitghosh.vercel.app/",
  },
  title: "Sumit Ghosh | Frontend Developer",
  description:
    "Sumit Ghosh is a Frontend developer, expertise in ReactJs, NextJs, TypeScript, TailwindCss, and team building",
  keywords:
    "Sumit Ghosh, Frontend Developer, ReactJs, NextJs, TypeScript, TailwindCss, Technology, Innovation, Team building, GammaStack, Lean Platform Technologies, The Product Platform, KhamBee, Emmail intelligence",
  openGraph: {
    locale: "en_US",
    siteName: "Sumit Ghosh",
    type: "website",
    title: "Sumit Ghosh",
    description:
      "Sumit Ghosh is a Frontend developer, expertise in ReactJs, NextJs, TypeScript, TailwindCss, and team building",
    url: "https://sumitghosh.vercel.app/",
    images: [
      {
        url: "https://sumitghosh.vercel.app/avatar.webp",
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
      <head>
        <title>Sumit Ghosh | Frontned Developer</title>
        <meta
          name="description"
          content="Sumit Ghosh is a Frontend developer, expertise in ReactJs, NextJs, TypeScript, TailwindCss, and team building"
        />
        <meta
          name="keywords"
          content="Sumit Ghosh, Frontend Developer, ReactJs, NextJs, TypeScript, TailwindCss, Technology, Innovation, Team building, GammaStack, Lean Platform Technologies, The Product Platform, KhamBee, Emmail intelligence"
        />
      </head>
      <body className={inter.className}>
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "p3oikuiha1");`,
          }}
        />
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
