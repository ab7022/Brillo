import { NextRequest, NextResponse } from "next/server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});


async function uploadFileToS3(file,fileName) {
    const fileBuffer = file
    console.log(fileName);
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || "",
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType:"Image/png"
        };

    
const command = new PutObjectCommand(params)
    await s3Client.send(command)
    return fileName
}

export async function POST(req: NextRequest) {
  try {
    // const body = await req.json();
    // const { file } = body;
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json(
        {
          error: "No file uploaded",
        },
        { status: 400 }
      );
    }
     const buffer = Buffer.from(await file.arrayBuffer())
     const fileName = await uploadFileToS3(buffer,file.name)
    return NextResponse.json({ success:true,fileName });
    // const command = new PutObjectCommand({
    //   Bucket: process.env.AWS_BUCKET_NAME || "",
    //   Key: file.name,
    //   Body: file,
    // });

    // const data = await s3Client.send(command);
    // console.log(data);
    // return NextResponse.redirect("/myaccount");
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
