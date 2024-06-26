import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

async function uploadFileToS3(file:any, fileName:any) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME || "",
    Key: fileName,
    Body: file,
    ContentType: "image/png", // Adjust as needed
  };
  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileName;
}
export async function POST(req:NextRequest) {
  try {
    const formData = await req.formData();
    const fileName = formData.get("fileName");

    const file = formData.get("file");
    const sessionEmail = req.headers.get("Authorization");

    if (!file || !sessionEmail) {
      return NextResponse.json(
        { error: "No file uploaded or session email provided" },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({
      where: {
        email: sessionEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const updatedFileName = `${fileName}`;
    const uploadedFileName = await uploadFileToS3(buffer, updatedFileName);

    return NextResponse.json({ success: true, fileName: uploadedFileName });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
