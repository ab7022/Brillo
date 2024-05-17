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
    console.log("User created with ID:", user.id);
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     const users = await client.user.findMany({});
//     if (!users || users.length === 0) {
//       console.log("No users found");
//       return NextResponse.json({ message: "No users found" }, { status: 404 });
//     }
//     const userInfos = users.map((user) => ({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//     }));

//     console.log("Users found:", userInfos);
//     return NextResponse.json(userInfos);
//   } catch (error) {
//     console.error("Error retrieving users:", error);
//     return NextResponse.json(
//       { message: "Error retrieving users" },
//       { status: 500 }
//     );
//   }
// }
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log(session);
  const data = await client.user.findFirst({
    where:{
      email: session?.user?.email ?? "" // Ensure email is always a string
    }
  });
  return NextResponse.json({
    data
  });
}
