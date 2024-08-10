// Layout.js
import React from "react";
import { Toaster } from "react-hot-toast";
import { Arimo, Rubik } from "next/font/google";
import { Providers } from "./Providers";
import ResumeContextProvider from "@/components/context/ResumeData";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Create a stunning portfolio website in minutes with EazyFolio. No coding required. Choose from professional templates and showcase your work easily."
        />
        <meta
          name="keywords"
          content="portfolio builder, website creator, free website builder, online portfolio, personal website, professional portfolio, no-code website, easy website builder"
        />
        <meta name="author" content="EazyFolio" />
        <meta name="robots" content="index, follow" />

        <title>EazyFolio - Create Your Portfolio Website in Minutes | Free Website Builder</title>

        <meta
          property="og:title"
          content="EazyFolio - Create Your Portfolio Website in Minutes"
        />
        <meta
          property="og:description"
          content="Build a professional portfolio website quickly and easily with EazyFolio. No coding skills needed. Start for free today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eazyfolio.com" />
        <meta
          property="og:image"
          content="https://i.ibb.co/fp2bbcd/scrnli-12-07-2024-01-38-02.png"
        />
        <meta property="og:site_name" content="EazyFolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@abdul__bayees" />
        <meta
          name="twitter:title"
          content="EazyFolio - Create Your Portfolio Website in Minutes"
        />
        <meta
          name="twitter:description"
          content="Build a professional portfolio website quickly and easily with EazyFolio. No coding skills needed. Start for free today!"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/fp2bbcd/scrnli-12-07-2024-01-38-02.png"
        />

        <link rel="canonical" href="https://www.eazyfolio.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebApplication",
              "name": "EazyFolio",
              "url": "https://www.eazyfolio.com",
              "description": "Create a stunning portfolio website in minutes with EazyFolio. No coding required.",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />

        {/* Google Analytics script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VCKYCTHQ3J"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VCKYCTHQ3J');
            `,
          }}
        />
        <script
          defer
          data-domain="eazyfolio.com"
          src="https://plausible.io/js/script.js"
        ></script>

        <link rel="icon" href="/Eazyfolioblack.jpeg" />
      </Head>
      <body className={`${arimo.variable} ${rubik.variable}`}>
        <Analytics />
        <Toaster position="top-center" />
        <Providers>
          <ResumeContextProvider>{children}</ResumeContextProvider>
        </Providers>
      </body>
    </html>
  );
}