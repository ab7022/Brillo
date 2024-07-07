"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import TemplateData from '@/data/templates'
export function Templates() {
  return <HeroParallax products={TemplateData} />;
}

