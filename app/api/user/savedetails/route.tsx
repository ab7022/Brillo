import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany({});
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  // Uncomment and configure the session handling if necessary
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { email } = session.user;

  const body = await req.json();
  const { personal, education, experience, skills, project, achievement } = body;

  try {
    // Fetch the user by email
    const user = await prisma.user.findUnique({
      where: { email },
      
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update or create resume data for the fetched user
    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        basicInfo: {
          create: {
            info_first_name: personal.firstName,
            info_last_name: personal.lastName,
            info_designation: personal.designation,
            info_intro: personal.introduction,
            info_social_linkedin: personal.linkedin,
            info_social_github: personal.github,
            info_email: personal.email,
            info_number: personal.phone,
            info_city: personal.city,
            info_country: personal.country,
            // userId will be automatically linked
          },
        },
        education: {
          create: education.map((edu) => ({
            education_title: edu.title,
            education_college_name: edu.college,
            education_duration: edu.duration,
            education_location: edu.location,
            // userId will be automatically linked
          })),
        },
        experience: {
          create: experience.map((exp) => ({
            company_name: exp.company_Name,
            designation: exp.designation,
            duration:exp.duration, // Make sure the date is in correct format
            location: exp.location,
            work_description_1: exp.description_responsibilities,
            work_description_2: exp.description_impacts,
            // userId will be automatically linked
          })),
        },
        skill: {
          create: {
            skill_name: skills.programmimg_languages,
            skill_programming_language: skills.programmimg_languages,
            skill_language: skills.languages,
            skill_technical_skills: skills.technical_skills,
            skill_soft_skills: skills.soft_skills,
            skill_familiar_softwares: skills.familiar_softwares,
            // userId will be automatically linked
          },
        },
        project: {
          create: project.map((proj) => ({
            project_title: proj.title,
            project_techstack: proj.techStacks,
            project_description: proj.description,
            project_deployed_url: proj.deployedLink,
            project_github_url: proj.githubLink,
            project_image: "", // Assuming there's no image URL provided
            // userId will be automatically linked
          })),
        },
        achievement: {
          create: {
            achievement_1: achievement.achievement1,
            achievement_2: achievement.achievement2,
            achievement_3: achievement.achievement3,
            achievement_4: achievement.achievement4,
            // userId will be automatically linked
          },
        },
      },
    });

    return NextResponse.json(updateUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while updating the resume" },
      { status: 500 }
    );
  }
}
