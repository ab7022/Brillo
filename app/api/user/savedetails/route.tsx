// Next.js API route handlers

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({});
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while fetching users" },
      { status: 500 }
    );
  }
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
    const user = await prisma.user.findUnique({
      where: { email: email ?? undefined },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userId = user.id;

    await updateBasicInfo(userId, personal);
    await updateAchievement(userId, achievement);
    await updateEducation(userId, education);
    await updateExperience(userId, experience);
    await updateSkills(userId, skills);
    await updateProject(userId, project);

    const updatedUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        basicInfo: true,
        education: true,
        experience: true,
        skill: true,
        project: true,
        achievement: true,
      },
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

async function updateBasicInfo(userId: number, personal: any) {
  const existingBasicInfo = await prisma.basicInfo.findUnique({
    where: { userId: userId },
  });

  if (existingBasicInfo) {
    await prisma.basicInfo.update({
      where: { userId: userId },
      data: {
        info_first_name: personal.firstName,
        info_profile: personal.profile,
        info_last_name: personal.lastName,
        info_designation: personal.designation,
        info_intro: personal.introduction,
        info_social_github: personal.github,
        info_social_linkedin: personal.linkedin,
        info_social_twitter: personal.twitter,
        info_email: personal.email,
        info_number: personal.phone,
        info_city: personal.city,
        info_country: personal.country,
      },
    });
  } else {
    await prisma.basicInfo.create({
      data: {
        userId: userId,
        info_first_name: personal.firstName,
        info_profile: personal.profile,
        info_last_name: personal.lastName,
        info_designation: personal.designation,
        info_intro: personal.introduction,
        info_social_github: personal.github,
        info_social_linkedin: personal.linkedin,
        info_social_twitter: personal.twitter,
        info_email: personal.email,
        info_number: personal.phone,
        info_city: personal.city,
        info_country: personal.country,
      },
    });
  }
}

async function updateAchievement(userId: number, achievement: any) {
  const existingAchievement = await prisma.achievement.findUnique({
    where: { userId: userId },
  });

  if (existingAchievement) {
    await prisma.achievement.update({
      where: { userId: userId },
      data: {
        achievement_1: achievement?.achievement1,
        achievement_2: achievement?.achievement2,
        achievement_3: achievement?.achievement3,
        achievement_4: achievement?.achievement4,
      },
    });
  } else {
    await prisma.achievement.create({
      data: {
        userId: userId,
        achievement_1: achievement?.achievement1,
        achievement_2: achievement?.achievement2,
        achievement_3: achievement?.achievement3,
        achievement_4: achievement?.achievement4,
      },
    });
  }
}


async function updateEducation(userId: number, education: any) {
  const existingEducation = await prisma.education.findMany({
    where: { userId: userId },
  });

  if (existingEducation.length > 0) {
    await prisma.education.deleteMany({
      where: { userId: userId },
    });
  }

  for (const edu of education) {
    await prisma.education.create({
      data: {
        education_title: edu.title,
        education_college_name: edu.college,
        education_duration: edu.duration,
        education_location: edu.location,
        userId,
      },
    });
  }
}


async function updateExperience(userId: number, experience: any) {
  const existingExperience = await prisma.experience.findMany({
    where: { userId: userId },
  });

  if (existingExperience.length > 0) {
    await prisma.experience.deleteMany({
      where: { userId: userId },
    });
  }

  for (const exp of experience) {
    await prisma.experience.create({
      data: {
        company_name: exp.company_Name,
        designation: exp.designation,
        duration: exp.duration,
        location: exp.location,
        work_description_1: exp.description_responsibilities,
        work_description_2: exp.description_impacts,
        userId,
      },
    });
  }
}

async function updateSkills(userId: number, skills: any) {
  const existingSkills = await prisma.skill.findUnique({
    where: { userId: userId },
  });

  if (existingSkills) {
    await prisma.skill.update({
      where: { userId: userId },
      data: {
        skill_name: skills.skill || "",
        skill_programming_language: skills.programming_languages || "",
        skill_language: skills.languages || "",
        skill_technical_skills: skills.technical_skills || "",
        skill_soft_skills: skills.soft_skills || "",
        skill_familiar_softwares: skills.familiar_softwares || "",
        skill_interest: skills.interest || "",
      },
    });
  } else {
    await prisma.skill.create({
      data: {
        userId: userId,
        skill_name: skills.skill || "",
        skill_programming_language: skills.programming_languages || "",
        skill_language: skills.languages || "",
        skill_technical_skills: skills.technical_skills || "",
        skill_soft_skills: skills.soft_skills || "",
        skill_familiar_softwares: skills.familiar_softwares || "",
        skill_interest: skills.interest || "",
      },
    });
  }
}

async function updateProject(userId: number, project: any) {
  const existingProject = await prisma.project.findUnique({
    where: { userId: userId },
  });

  if (existingProject) {
    await prisma.project.update({
      where: { userId: userId },
      data: {
        project_title: project.title,
        project_techstack: project.techStacks,
        project_description: project.description,
        project_deployed_url: project.deployedLink,
        project_github_url: project.githubLink,
        project_image: project.thumbnailUrl,
      },
    });
  } else {
    await prisma.project.create({
      data: {
        userId: userId,
        project_title: project.title,
        project_techstack: project.techStacks,
        project_description: project.description,
        project_deployed_url: project.deployedLink,
        project_github_url: project.githubLink,
        project_image: project.thumbnailUrl,
      },
    });
  }
}



export {
  updateBasicInfo,
  updateAchievement,
  updateEducation,
  updateExperience,
  updateSkills,
  updateProject,
};
