import { lemonSqueezyApiInstance } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();

    if (!reqData.productId)
      return Response.json(
        { message: "productId is required" },
        { status: 400 }
      );
    if (!reqData.userId)
      return Response.json({ message: "userId is required" }, { status: 400 });
    console.log(reqData.userId);
    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: reqData.userId.toString(),
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    console.log(response.data);

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error("Error in POST /api/orders/purchaseProduct:", error.response);

    // Return appropriate error response
    if (error.response) {
      // The request was made and the server responded with a non-2xx status
      return NextResponse.json(
        { message: error.response.data.errors[0].detail },
        { status: error.response.status }
      );
    } else if (error.request) {
      // The request was made but no response was received
      return NextResponse.json(
        { message: "No response from server" },
        { status: 500 }
      );
    } else {
      // Something happened in setting up the request that triggered an error
      return NextResponse.json(
        { message: "An error occurred while processing the request" },
        { status: 500 }
      );
    }
  }
}
