import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Extract the Authorization header from the request
    const authorizationHeader = req.headers.get('Authorization');

    // Check if authorization header exists and if it starts with 'Bearer '
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      // If authorization header is missing or not in the correct format, return a 401 Unauthorized response
      return new NextResponse(null, { status: 401 });
    }

    // Extract the token (session email) from the authorization header
    const sessionEmail = authorizationHeader.split(' ')[1];
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
