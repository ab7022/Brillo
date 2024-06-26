// File: pages/api/templates/make-live.js
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { NextRequest ,NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function  POST(req:NextRequest, res:NextResponse) {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" },{status:401});
    }
    const body = await req.json()
    const { templateId } = body
    const email = session?.user?.email || "";

    if (!email || !templateId) {
      return NextResponse.json({ error: "Email or template ID missing" },{status:400});
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
        return NextResponse.json({ error: "User Not Found" },{status:404});
    }

    await prisma.userTemplate.updateMany({
      where: {
        userId: user.id,
        status: true,
      },
      data: {
        status: false,
      },
    });

    const updatedTemplate = await prisma.userTemplate.update({
      where: {
        userId_templateId: {
          userId: user.id,
          templateId: parseInt(templateId),
        },
      },
      data: {
        status: true,
      },
    });

    return NextResponse.json(updatedTemplate,{status:200});
} catch (error) {
    console.error(error);
    return NextResponse.json({error:"An Error Occured"},{status:500});
  } finally {
    await prisma.$disconnect();
  }
}
