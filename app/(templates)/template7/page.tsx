"use client";
import { useEffect, useState } from "react";
// import ScrollReveal from "scrollreveal";
import Header from "@/components/AllTemplates/template7/components/Header";
import Home from "@/components/AllTemplates/template7/components/Home";
import About from "@/components/AllTemplates/template7/components/About";
import Projects from "@/components/AllTemplates/template7/components/Projects";
import Services from "@/components/AllTemplates/template7/components/Services";
import Contact from "@/components/AllTemplates/template7/components/Contact";
import Footer from "@/components/AllTemplates/template7/components/Footer";
import "../../styles/index.css";
import axios from "axios";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Arimo, Rubik } from "next/font/google";
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

 function Layout({ children }:any) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${rubik.variable}`}>
        <Toaster position="top-center" />

        {children}
      </body>
    </html>
  );
}

export default function Template7({ data }:any) {


  // useEffect(() => {
  //   if (!loading && data) {
  //     const sr = ScrollReveal({
  //       origin: "top",
  //       distance: "20px",
  //       duration: 1000,
  //       reset: true,
  //     });

  //     sr.reveal(`.home, .about, .services, .projects, .contact`, {
  //       interval: 200,
  //     });
  //   }
  // }, [loading, data]);


  const firstName = data?.basicInfo?.[0]?.first_name || "";
  const lastName = data?.basicInfo?.[0]?.last_name || "";
  const intro = data?.basicInfo?.[0]?.intro || "";
  const linkedin = data?.socialProfiles?.[0]?.linkedin || "";
  const socialProfiles = data?.socialProfiles || [];
  const basicInfo = data?.basicInfo || [];
  const project = data?.project || [];

  return (
    <>
    <Layout>
      <Header firstName={firstName} lastName={lastName} />
      <main className="main">
        <Home socialProfiles={socialProfiles} basicInfo={basicInfo} />
        <About intro={intro} skill={data?.skill} linkedin={linkedin} />
        {/* <Services /> */}
        <Projects projects={project} />
        <Contact socialProfiles={socialProfiles} />
      </main>
      <Footer firstName={firstName} lastName={lastName} />
      </Layout>
    </>
  );
}
