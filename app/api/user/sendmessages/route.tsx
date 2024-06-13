// pages/api/user/sendMessages.ts

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
