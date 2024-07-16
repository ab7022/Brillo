// File: pages/api/templates/make-live.js
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    // Check if session exists
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Extract templateId from request body
    const { templateId } = await req.json();
    const email = session?.user?.email || "";

    // Validate email and templateId
    if (!email || !templateId) {
      return NextResponse.json(
        { error: "Email or template ID missing" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      include: { orders: { orderBy: { createdAt: "desc" }, take: 1 } },
    });

    // Handle case where user is not found
    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }
    const currentDate = new Date();
    let isUserValid = false;

    if (user.validTill && currentDate <= new Date(user.validTill)) {
      isUserValid = true;
    }

    if (user.trialEndsAt && currentDate <= new Date(user.trialEndsAt)) {
      isUserValid = true;
    }
    
    if (!isUserValid) {
      return NextResponse.json(
        { error: "Subscription expired or trial period ended" },
        { status: 403 }
      );
    }
    // Update all other templates for the user to false
    await prisma.userTemplate.updateMany({
      where: {
        userId: user.id,
        status: true,
      },
      data: {
        status: false,
      },
    });

    // Ensure username exists
    const username = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        username: true,
      },
    });

    if (!username) {
      return NextResponse.json(
        { error: "Username is missing" },
        { status: 400 }
      );
    }

    // Ensure portfolio details are submitted
    const portfolioDetails = await prisma.user.findFirst({
      where: {
        email,
        isdetailsubmitted: true,
      },
    });

    if (!portfolioDetails) {
      return NextResponse.json(
        { error: "Portfolio Details is missing" },
        { status: 400 }
      );
    }

    // Update the selected template for the user to true
    const updatedTemplate = await prisma.userTemplate.update({
      where: {
        userId_templateId: {
          userId: user.id,
          templateId: parseInt(templateId), // Convert templateId to integer
        },
      },
      data: {
        status: true,
      },
    });

    // Return the updated template object
    return NextResponse.json(updatedTemplate, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An Error Occurred" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
