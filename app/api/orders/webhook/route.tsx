// src/webhooks/lemonsqueezy.js

import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log(body);
    console.log(eventType);

    if (eventType === "order_created") {
      const {
        id,
        attributes: { total, status, currency, user_name, user_email ,
        first_order_item: { product_name, product_id }},
      } = body.data;

      const { user_id } = body.meta.custom_data;

      if (status === "paid") {
        // Calculate validity period in hours based on subscription type
        let validityHours;
        switch (product_name) {
          case "24-Hour Pass":
            validityHours = 24;
            break;
          case "Monthly Pass":
            validityHours = 24 * 30;
            break;
          case "Yearly Pass":
            validityHours = 24 * 365;
            break;
          default:
            validityHours = 0;
            break;
        }

         // Calculate new validTill date in UTC
         const validTillUTC = new Date();
         validTillUTC.setHours(validTillUTC.getHours() + validityHours);
 
         // Convert UTC date to Indian Standard Time (IST)
         const validTillIST = new Date(validTillUTC.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
 
        const createdOrder = await prisma.order.create({
          data: {
            lemonOrderId: parseInt(id),
            userId: parseInt(user_id),
            userName: user_name,
            userEmail: user_email,
            total,
            currency,
            status,
            productId: product_id,
            productName: product_name,
          },
        });

        await prisma.user.update({
          where: { id: parseInt(user_id) },
          data: { validTill: validTillIST, premium_user: true },
        });

        // Format date for response
        const validTillFormatted = validTillIST.toLocaleString("en-US", {
          timeZone: "UTC",
        });

        return new Response(
          JSON.stringify({
            message: `Order received and processed for user ${user_id}`,
            validTill: validTillFormatted,
            validityHours: validityHours,
            order: createdOrder,
          }),
          { status: 200 }
        );
      }
    }

    return new Response(JSON.stringify({ message: "Webhook received" }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
