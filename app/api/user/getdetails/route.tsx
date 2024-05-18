import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const authorizationHeader = req.headers.get('Authorization');

    if (!authorizationHeader) {
   
      return new NextResponse(null, { status: 401 });
    }
    const sessionEmail = authorizationHeader;
    console.log("session email:", sessionEmail);
    
    // Fetch user details based on the session email
    const user = await client.user.findUnique({
      where: {
        email: sessionEmail
      }
    });

    // If user details are found, return them in the response
    if (user) {
      return new NextResponse(JSON.stringify({ user }), { status: 200 });
    } else {
      // If user details are not found, return a 404 Not Found response
      return new NextResponse(null, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    // If there's an error, return a 500 Internal Server Error response
    return new NextResponse(null, { status: 500 });
  }
}
