import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth"; 

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = session.user?.email;

    if (!email) {
      return NextResponse.json(
        { error: "Email not found in session" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userId = user.id;
    const activeTemplate = await prisma.userTemplate.findFirst({
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
          status: activeTemplate.status,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(false, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while fetching user templates" },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   const session = await getServerSession(NEXT_AUTH_CONFIG);
//   if (!session) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }
//   const email = session.user?.email;
//   const body = await req.json();
//   const {
//     personal,
//     education,
//     experience,
//     skills,
//     project,
//     achievement,
//     socialProfiles,
//   } = body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email: email ?? undefined },
//     });

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     const userId = user.id;

//     return NextResponse.json(updatedUser, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "An error occurred while updating the resume" },
//       { status: 500 }
//     );
//   }
// }
