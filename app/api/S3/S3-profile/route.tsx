import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises"; // Importing fs/promises for file operations

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

async function uploadFileToS3(file: Buffer, fileName: string): Promise<string> {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME || "",
    Key: fileName,
    Body: file,
    ContentType: "image/png", // Example content type
  };
  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileName;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fileEntry = formData.get("file");

    if (!fileEntry) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    if (!(fileEntry instanceof File)) {
      return NextResponse.json(
        { error: "Invalid file format" },
        { status: 400 }
      );
    }

    const sessionEmail = req.headers.get("Authorization");

    if (!sessionEmail) {
      return NextResponse.json(
        { error: "No session email provided" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: sessionEmail,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Read file contents into a buffer
    const buffer = Buffer.from(await fileEntry.arrayBuffer());
    const fileName = `${sessionEmail}/profile`;
    const uploadedFileName = await uploadFileToS3(buffer, fileName);

    return NextResponse.json({ success: true, fileName: uploadedFileName });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
