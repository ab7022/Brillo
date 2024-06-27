
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
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const visitorcount = await prisma.user.findUnique({
      where: { email },
      select: {
        visitor: true,
      },
    });

    return NextResponse.json({ count:visitorcount.visitor }, { status: 200 });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json({ error: 'Error fetching visitor count.' }, { status: 500 });
  }
}
