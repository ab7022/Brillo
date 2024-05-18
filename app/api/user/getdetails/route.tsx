import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // const body = await req.json();
    const user = await client.user.findUnique({
     where:{
        email:"bayees1@gmail.com"
     }
    });
    // console.log("User created with ID:", user.id);
    return NextResponse.json({ user});
  } catch (error) {
    console.error("Error creating user:", error);
    // return NextResponse.json(
    //   { message: "Error creating user" },
    //   { status: 500 }
    // );
  }
}