"use client";
import { Education } from "@/components/AllTemplates/template8/components/education";
import BlurFade from "@/components/AllTemplates/template8/components/magicui/blur-fade";
import BlurFadeText from "@/components/AllTemplates/template8/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/AllTemplates/template8/components/project-card";
import { ResumeCard } from "@/components/AllTemplates/template8/components/resume-card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/AllTemplates/template8/components/ui/avatar";
import { Badge } from "@/components/AllTemplates/template8/components/ui/badge";
import Navbar from "@/components/AllTemplates/template8/components/navbar";

import axios from "axios";
import Link from "next/link";
import Markdown from "react-markdown";
import "./globals.css";

const BLUR_FADE_DELAY = 0.04;
import { ThemeProvider } from "@/components/AllTemplates/template8/components/theme-provider";
import { TooltipProvider } from "@/components/AllTemplates/template8/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-4",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function Template8({ data }: any) {
  const basicInfo = data?.basicInfo || [];
  const socialProfiles = data?.socialProfiles || [];
  const skill = data?.skill || [];
  const project = data?.project || [];
  const firstName = data?.basicInfo?.[0]?.first_name || "";
  const profile = data?.basicInfo?.[0]?.profile || "";

  const shortIntro = data?.basicInfo?.[0]?.shortintro || "";
  const intro = data?.basicInfo?.[0]?.intro || "";
  const software_proficiencyObject = data?.skill?.[0]?.software_proficiency;
  const business_administrative_skillsObject =
    data?.skill?.[0]?.business_administrative_skills;
  const programming_technical_skillsObject =
    data?.skill?.[0]?.programming_technical_skills;
  const language_soft_skillsObject = data?.skill?.[0]?.language_soft_skills;
  const interests_others_skillsObject =
    data?.skill?.[0]?.interests_others_skills;

  const software_proficiency = software_proficiencyObject
    ? software_proficiencyObject.split(",").map((skill: any) => skill.trim())
    : [];
  const programming_technical_skills = programming_technical_skillsObject
    ? programming_technical_skillsObject
        .split(",")
        .map((skill: any) => skill.trim())
    : [];
  const language_soft_skills = language_soft_skillsObject
    ? language_soft_skillsObject.split(",").map((skill: any) => skill.trim())
    : [];
  const interests_others_skills = interests_others_skillsObject
    ? interests_others_skillsObject.split(",").map((skill: any) => skill.trim())
    : [];
  const business_administrative_skills = business_administrative_skillsObject
    ? business_administrative_skillsObject
        .split(",")
        .map((skill: any) => skill.trim())
    : [];
  const experience = data?.experience;
  const education = data?.education;
  const email = data?.socialProfiles?.[0]?.email || "";

  return (
    <>
      <RootLayout>
        <main className="flex flex-col min-h-[100dvh] space-y-10">
          <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
              <div className="gap-2 flex justify-between">
                <div className="flex-col flex flex-1 space-y-1.5">
                  {firstName?.length > 0 && (
                    <BlurFadeText
                      delay={BLUR_FADE_DELAY}
                      className="text-3xl mt-2  font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                      yOffset={8}
                      text={`Hi, I'm ${firstName.split(" ")[0]} `}
                    />
                  )}
                  {shortIntro?.length > 0 && (
                    <BlurFadeText
                      className="max-w-[600px] mt-2 md:text-xl"
                      delay={BLUR_FADE_DELAY}
                      text={shortIntro}
                    />
                  )}
                </div>
                <BlurFade delay={BLUR_FADE_DELAY} className="mt-2">
                  <Avatar className="size-28 border ">
                    <AvatarImage alt={firstName} src={profile} />
                    <AvatarFallback className="bg-gray-200">
                      {firstName?.charAt(0)?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
            </div>
          </section>
          {intro?.length > 0 && (
            <section id="about">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold dark:text-gray-100">About</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                  {intro}
                </Markdown>
              </BlurFade>
            </section>
          )}

          {(experience?.[0]?.company_name || experience?.[0]?.designation) && (
            <section id="work">
              <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                  <h2 className="text-xl font-bold dark:text-gray-100">
                    Work Experience
                  </h2>
                </BlurFade>
                {experience.map((work, id) => (
                  <BlurFade
                    key={work.company_name}
                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  >
                    <ResumeCard
                      key={work.company_name}
                      altText={work.company_name}
                      title={work.company_name}
                      designation={work.designation}
                      location={work.location}
                      period={work.duration}
                      description1={work.description1}
                      description2={work.description2}
                      description3={work.description3}
                    />
                  </BlurFade>
                ))}
              </div>
            </section>
          )}
          {(education?.[0]?.college || education?.[0]?.degree) && (
            <section id="education">
              <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                  <h2 className="text-xl font-bold dark:text-gray-100">
                    Education
                  </h2>
                </BlurFade>
                {education.map((education, id) => (
                  <BlurFade
                    key={education.college}
                    delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                  >
                    <Education
                      key={education.college}
                      href={education.href}
                      altText={education.college}
                      title={education.college}
                      period={education.duration}
                      description1={education.degree}
                      location={education.location}
                    />
                  </BlurFade>
                ))}
              </div>
            </section>
          )}
          <section id="skills">
            {software_proficiencyObject?.length > 0 && (
              <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <h2 className="text-xl font-bold dark:text-white">
                    Software Proficiency
                  </h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                  {software_proficiency.map((skill: any, id: any) => (
                    <BlurFade
                      key={skill}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                      className="mt-2"
                    >
                      <Badge
                        key={skill}
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 p-2"
                      >
                        {skill}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            )}
            {programming_technical_skillsObject?.length > 0 && (
              <div className="flex min-h-0 flex-col gap-y-3 mt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <h2 className="text-xl font-bold dark:text-white">
                    Programming & Technical Skills
                  </h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                  {programming_technical_skills.map((skill: any, id: any) => (
                    <BlurFade
                      key={skill}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                      className="mt-2"
                    >
                      <Badge
                        key={skill}
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 p-2"
                      >
                        {skill}
                      </Badge>{" "}
                    </BlurFade>
                  ))}
                </div>
              </div>
            )}
            {language_soft_skillsObject?.length > 0 && (
              <div className="flex min-h-0 flex-col gap-y-3 mt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <h2 className="text-xl font-bold dark:text-white">
                    Language & Soft Skills
                  </h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                  {language_soft_skills.map((skill: any, id: any) => (
                    <BlurFade
                      key={skill}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                      className="mt-2"
                    >
                      <Badge
                        key={skill}
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 p-2"
                      >
                        {skill}
                      </Badge>{" "}
                    </BlurFade>
                  ))}
                </div>
              </div>
            )}
            {interests_others_skillsObject?.length > 0 && (
              <div className="flex min-h-0 flex-col gap-y-3 mt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <h2 className="text-xl font-bold dark:text-white">
                    Interests Others Skills
                  </h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                  {interests_others_skills.map((skill: any, id: any) => (
                    <BlurFade
                      key={skill}
                      className="mt-2"
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge
                        key={skill}
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 p-2"
                      >
                        {skill}
                      </Badge>{" "}
                    </BlurFade>
                  ))}
                </div>
              </div>
            )}
            {business_administrative_skillsObject?.length > 0 && (
              <div className="flex min-h-0 flex-col gap-y-3 mt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <h2 className="text-xl font-bold dark:text-white">
                    Business & Administrative Skills
                  </h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                  {business_administrative_skills.map((skill: any, id: any) => (
                    <BlurFade
                      key={skill}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                      className="mt-2"
                    >
                      <Badge
                        key={skill}
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 p-2"
                      >
                        {skill}
                      </Badge>{" "}
                    </BlurFade>
                  ))}
                </div>
              </div>
            )}
          </section>
          {(project?.[0]?.title || project?.[0]?.image) && (
            <section id="projects">
              <div className="space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                        My Projects
                      </div>
                      <h2 className="text-3xl dark:text-white font-bold tracking-tighter sm:text-5xl">
                        Check out my latest work
                      </h2>
                      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I&apos;ve worked on a variety of projects,And here are a
                        few of my favorites.
                      </p>
                    </div>
                  </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                  {project.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.updatedTechStack}
                        image={project.image}
                        deployed_url={project.deployed_url}
                        github_url={project.github_url}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
            </section>
          )}
          <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="space-y-3">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Want to chat? Just shoot me a dm{" "}
                    <Link
                      href={email}
                      className="text-blue-500 hover:underline hover:text-black"
                    >
                      with a direct question on Email
                    </Link>{" "}
                    and I&apos;ll respond whenever I can. I will ignore all
                    soliciting.
                  </p>
                </div>
              </BlurFade>
            </div>
          </section>
        </main>
        <Navbar socialProfiles={socialProfiles} />
      </RootLayout>
    </>
  );
}
