import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = await client.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
        premium_user: true,
        validity: "2025-05-08T12:00:00Z",
        // profile_url: "https://example.com/admin",
        admin: true,
        provider: "email", // Add the missing provider property
      },
    });
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}

import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const data = await client.user.findFirst({
    where:{
      email: session?.user?.email ?? "" // Ensure email is always a string
    }
  });
  return NextResponse.json({
    data
  });
}
