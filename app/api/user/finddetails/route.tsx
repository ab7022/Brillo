import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Fetch user details based on the session email
    const user = await client.user.findUnique({
      where: {
        email: body.username,
      },
    });
console.log(user);

    // If user details are found, return them in the response
    if (user) {
      return new NextResponse(JSON.stringify({ user }), {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Authorization",
        },
      });
    } else {
      // If user details are not found, return a 404 Not Found response
      return new NextResponse(null, {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Authorization",
        },
      });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    // If there's an error, return a 500 Internal Server Error response
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

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
}