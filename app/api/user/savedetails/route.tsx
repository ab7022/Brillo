// Next.js API route handlers

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { updateAchievement, updateBasicInfo, updateEducation, updateExperience, updateProject, updateSkills, updateSocials } from "@/components/myaccount/DataInsertion";

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
  const { personal, education, experience, skills, project, achievement ,socialProfiles} =
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
    await updateSocials(userId,socialProfiles)
    await prisma.user.update({
      where: { id: userId },
      data: { isdetailsubmitted: true },
    });

    const updatedUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        basicInfo: true,
        education: true,
        experience: true,
        skill: true,
        project: true,
        achievement: true,
        socialProfiles:true
      },
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while updating the resume" },
      { status: 500 }
    );
  }
}

