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
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const email = session.user?.email;

  const body = await req.json();
  const { personal, education, experience, skills, project, achievement } =
    body;

  try {
    // Fetch the user by email
    let user = await prisma.user.findUnique({
      where: { email: email ?? undefined },
      include: {
        basicInfo: true,
        education: true,
        experience: true,
        skill: true,
        project: true,
        achievement: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userId = user.id;

    const updateData = {
      basicInfo: {
        upsert: {
          where: { userId },
          update: {
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
          },
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
          },
        },
      },
      education: {
        deleteMany: { userId },
        create: education.map((edu) => ({
          education_title: edu.title,
          education_college_name: edu.college,
          education_duration: edu.duration,
          education_location: edu.location,
        })),
      },
      experience: {
        deleteMany: { userId },
        create: experience.map((exp) => ({
          company_name: exp.company_Name,
          designation: exp.designation,
          duration: exp.duration,
          location: exp.location,
          work_description_1: exp.description_responsibilities,
          work_description_2: exp.description_impacts,
        })),
      },
      skill: {
        upsert: {
          where: { userId },
          update: {
            skill_name: skills.programmimg_languages,
            skill_programming_language: skills.programmimg_languages,
            skill_language: skills.languages,
            skill_technical_skills: skills.technical_skills,
            skill_soft_skills: skills.soft_skills,
            skill_familiar_softwares: skills.familiar_softwares,
          },
          create: {
            skill_name: skills.programmimg_languages,
            skill_programming_language: skills.programmimg_languages,
            skill_language: skills.languages,
            skill_technical_skills: skills.technical_skills,
            skill_soft_skills: skills.soft_skills,
            skill_familiar_softwares: skills.familiar_softwares,
          },
        },
      },
      project: {
        deleteMany: { userId },
        create: project.map((proj) => ({
          project_title: proj.title,
          project_techstack: proj.techStacks,
          project_description: proj.description,
          project_deployed_url: proj.deployedLink,
          project_github_url: proj.githubLink,
          project_image: "",
        })),
      },
      achievement: {
        upsert: {
          where: { userId },
          update: {
            achievement_1: achievement.achievement1,
            achievement_2: achievement.achievement2,
            achievement_3: achievement.achievement3,
            achievement_4: achievement.achievement4,
          },
          create: {
            achievement_1: achievement.achievement1,
            achievement_2: achievement.achievement2,
            achievement_3: achievement.achievement3,
            achievement_4: achievement.achievement4,
          },
        },
      },
    };

    // Update or create resume data for the fetched user
    const updatedUser = await prisma.user.update({
      where: { email },
      data: updateData,
    });

    return NextResponse.json(updatedUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while updating the resume" },
      { status: 500 }
    );
  }
}
