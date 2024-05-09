// import { Providers } from "./providers";
import "./globals.css";

import { Arimo } from "next/font/google";
import { Rubik } from "next/font/google";
import { Providers } from "./Providers";
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
      <body className={arimo.variable + " " + rubik.variable}>
        <Providers>{children}</Providers>{" "}
      </body>
    </html>
  );

}