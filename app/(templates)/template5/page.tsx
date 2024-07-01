"use client"
import Intro from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Intro";
import Introduction from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Introduction";
import Projecthomesub from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Projecthomesub";
import KeepTouch from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/KeepTouch";
import Header from "@/components/AllTemplates/template5/Components/Header/Header";
import Footer from "@/components/AllTemplates/template5/Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import "./App.scss";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default function Template5({ data }:any) {

  const email = data?.socialProfiles?.[0]?.email || "";
  const firstName = data.basicInfo[0].first_name;
  const lastName = data.basicInfo[0].last_name;

  return (
    <MainLayout>
      <div className="Hero-Div bg-black">
        <Header basicInfo={data.basicInfo} />
        <Intro basicInfo={data.basicInfo} socialProfiles={data.socialProfiles} />
        <Introduction basicInfo={data.basicInfo} />
        <Projecthomesub projects={data.project} />
        <KeepTouch socialProfiles={data.socialProfiles} />
        <Footer email={email} firstName={firstName} lastName={lastName} />
      </div>
    </MainLayout>
  );
}
