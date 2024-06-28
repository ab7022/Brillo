// pages/api/user/sendMessages.ts

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
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
      return NextResponse.json(
        { error: "user not available" },
        { status: 400 }
      );
    }

    const data = await req.json();
    const body = data.formData;

    const name = body.name;
    const message = body.message;
    const userEmail = body.email;

    await prisma.support.create({
      data: {
        email,
        fetchedemail:userEmail,
        name,
        message,
        userId: user.id,
      },
    });

    return NextResponse.json(
      { message: "Form data saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json(
      { error: "Error saving form data." },
      { status: 500 }
    );
  }
}
