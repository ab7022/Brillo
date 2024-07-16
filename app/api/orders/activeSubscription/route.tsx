// pages/api/orders/subscription.js

import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const email = session.user?.email;

  const user = await prisma.user.findUnique({
    where: { email: email ?? undefined },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const userId = user.id;
  try {
    const user = (await prisma.user.findUnique({
      where: { id: userId },
      include: {
        orders: {
          select: {
            id: true,
            lemonOrderId: true,
            userId: true,
            userName: true,
            userEmail: true,
            productId: true,
            productName: true,
            createdAt: true,
          },
          orderBy: { createdAt: "desc" }, // Example: Order by createdAt descending
          take: 1, // Example: Fetch only the latest order
        },
      },
    })) as any; // Add 'as any' to bypass type checking

    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }
    console.log(user);
    const validity = user.validTill;
    const currentDate = new Date();

    // Check if validity is expired
    if (validity && currentDate > new Date(validity)) {
      return NextResponse.json(
        { message: "Your subscription has expired. Please renew your plan." },
        { status: 200 }
      );
    }
    if (user.orders.length > 0) {
      const latestOrder = user.orders[0]; // Assuming orders are sorted by createdAt desc
      return NextResponse.json(
        {
          validity: validity,
          orders: user.orders,
          premium_user: true, // Assuming premium_user logic
          latestOrder,
        },
        { status: 200 }
      );
    } else {
      // Check if user is within trial period
      if (user.trialEndsAt && new Date() <= new Date(user.trialEndsAt)) {
        return NextResponse.json(
          {
            trial: true,
            trialEndsAt: user.trialEndsAt,
            premium_user: false, // Assuming premium_user logic
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            message:
              "You do not have any active subscriptions. Please purchase a premium plan.",
            premium_user: false, // Assuming premium_user logic
          },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch subscription data",
      },
      { status: 500 }
    );
  }
}
