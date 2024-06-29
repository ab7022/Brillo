import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const user = await client.user.findUnique({
      where: {
        username: body.username,
      }}
    )
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      const userId = user.id;
      const activeTemplate = await client.userTemplate.findFirst({
        where: {
          userId: userId,
          status: true,
        },
        select:{
          templateId:true,
          status:true
        }
      });
  
      if (activeTemplate) {
        return NextResponse.json(
          {
            templateId: activeTemplate.templateId,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(false, { status: 200 });
      }
    
    }
   catch (error) {
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

