import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const authorizationHeader = req.headers.get("Authorization");
    console.log("authorisation header:",authorizationHeader);
    
    if (!authorizationHeader) {
      return new NextResponse(null, {
        status: 401,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Authorization",
        },
      });
    }
    const sessionEmail = authorizationHeader;
    console.log("session email:", sessionEmail);

    const user = await client.user.findUnique({
      where: {
        email: sessionEmail,
      },
    });
    const username = user?.username;
    if (user) {
      return new NextResponse(JSON.stringify({ username }), {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Authorization",
        },
      });
    } else {
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body) {
      return;
    }
    const username = body.username;

    const user = await client.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      return new NextResponse(JSON.stringify({ message:"Username is Available" }), {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Username is Taken" }),
        {
          status: 201,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return new NextResponse(null, {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}



export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body) {
      return;
    }
    const username = body.username;
    const email = body.email;
    const user = await client.user.update({
      where: {
        email,
      },
      data:{
        username
      }
    });
    if (user) {
      return new NextResponse(JSON.stringify({ message:"username updated" }), {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong" }),
        {
          status: 201,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return new NextResponse(null, {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
