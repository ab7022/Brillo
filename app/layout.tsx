// Layout.js
import React from "react";
import { Toaster } from "react-hot-toast";
import { Arimo, Rubik } from "next/font/google";
import { Providers } from "./Providers";
import ResumeContextProvider from "@/components/context/ResumeData";
import { Analytics } from "@vercel/analytics/react"; // Assuming you're using Vercel's analytics
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
      <head>
        {/* SEO meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover EazyFolio, the intuitive no-code portfolio builder that empowers users to create stunning personal websites effortlessly. Choose from a variety of professionally designed templates, customize with ease, and showcase your skills, projects, and achievements in minutes. Perfect for professionals and creatives looking to establish a standout online presence without any coding expertise."
        />
        <meta
          name="keywords"
          content="portfolio builder, no-code, website, templates, build free website, create portfolio page, eazyfolio, eazy folio, create my portfolio, develop portfolio"
        />
        <meta name="author" content="Abdul Bayees" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Create beautiful portfolios effortlessly"
        />
        <meta
          property="og:description"
          content="Empower your career with our easy portfolio builder. Choose your favorite template and showcase at EAZYFOLIO.COM/USERNAME"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eazyfolio.com" />
        <meta
          property="og:image"
          content="https://ibb.co/fp2bbcd"
        />
        <meta property="og:site_name" content="Eazy Folio" />

        {/* Twitter Card meta tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Create beautiful portfolios effortlessly" />
        <meta
          name="twitter:description"
          content="Empower your career with our easy portfolio builder. Choose your favorite template and showcase at EAZYFOLIO.COM/USERNAME"
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/twitter-image.jpg"
        /> */}

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
        
        {/* Favicon */}
        <link rel="icon" href="/Eazyfolioblack.jpeg" />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* Set up fonts or other meta tags here */}
        <title>Eazy Folio</title>
        {/* Include any other meta tags, link tags, or stylesheets */}
      </head>
      <body className={`${arimo.variable} ${rubik.variable}`}>
        <Analytics />
        {/* <ErrorBoundary> */}
        <Toaster position="top-center" />
        <Providers>
          <ResumeContextProvider>{children}</ResumeContextProvider>
        </Providers>
        {/* </ErrorBoundary> */}
      </body>
    </html>
  );
}
