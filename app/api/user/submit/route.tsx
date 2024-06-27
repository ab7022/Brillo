// pages/api/user/issubmitted.ts

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

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
      }
    })
    if (!user) {
      return NextResponse.json({ error: "user not available" }, { status: 400 });
    }
    const userDetails = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        isdetailsubmitted: true,
      },
    });
    console.log(userDetails,"hey")
    if (userDetails) {
      return NextResponse.json(userDetails, { status: 200 });
    } else {
      return NextResponse.json({ error: "User details not found" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return new NextResponse(null, {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization",
      },
    });
  }
}
