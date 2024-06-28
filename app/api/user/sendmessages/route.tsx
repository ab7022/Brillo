// pages/api/user/sendMessages.ts

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const body = data.formData;
    console.log(body);
    const name = body.name
    const email = body.email;
    const message = body.message;
    const userEmail = body.userEmail
    console.log("email",userEmail);
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Create a new message
    await prisma.messages.create({
      data: {
        name,
        email,
        message,
        userId: user.id,
      },
    });

    return NextResponse.json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ error: 'Error saving form data.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = session.user?.email;

    if (!email) {
      return NextResponse.json({ error: "Email is missing" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userMessages = await prisma.messages.findMany({
      where: {
        userId: user.id,
      },
      select: {
        name: true,
        message: true,
        email: true,
      },
    });

    if (userMessages.length > 0) {
      return NextResponse.json(userMessages, { status: 200 });
    } else {
      return NextResponse.json({ error: "No messages found for the user" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return new NextResponse(null, {
      status: 500,
    });
  }
}