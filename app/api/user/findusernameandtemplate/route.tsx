import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const user = await client.user.findUnique({
      where: {
        username: body.username,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        project: true,
        skill: true,
        education: true,
        experience: true,
        basicInfo: true,
        achievement: true,
        socialProfiles: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch active template
    const activeTemplate = await client.userTemplate.findFirst({
      where: {
        userId: user.id,
        status: true,
      },
      select: {
        templateId: true,
        status: true,
      },
    });

    const responsePayload = {
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        project: user.project,
        skill: user.skill,
        education: user.education,
        experience: user.experience,
        basicInfo: user.basicInfo,
        achievement: user.achievement,
        socialProfiles: user.socialProfiles,
      },
      template: activeTemplate
        ? {
            templateId: activeTemplate.templateId,
            status: activeTemplate.status,
          }
        : null,
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return new NextResponse(null, {
      status: 500,
    });
  }
}
