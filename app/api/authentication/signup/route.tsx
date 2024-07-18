import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import validator from 'validator';
import rateLimit from '@/lib/rateLimit';

const prisma = new PrismaClient();

// Set rate limit to 10 requests per 5 minutes
const limiter = rateLimit(10, 5 * 60 * 1000);

export async function POST(req: NextRequest): Promise<Response> {
  return new Promise<Response>((resolve) => {
    const res = new NextResponse();
    limiter(req, res, async () => {
      try {
        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
          resolve(NextResponse.json(
            { error: "Name, email, and password are required" },
            { status: 400 }
          ));
          return;
        }
        if (name.length < 3) {
          resolve(NextResponse.json(
            { error: "Name must be at least 3 characters long" },
            { status: 400 }
          ));
          return;
        }
        if (!validator.isEmail(email)) {
          resolve(NextResponse.json(
            { error: "Invalid email address" },
            { status: 400 }
          ));
          return;
        }
        if (password.length < 6) {
          resolve(NextResponse.json(
            { error: "Password must be at least 6 characters long" },
            { status: 400 }
          ));
          return;
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
          resolve(NextResponse.json(
            { error: "Email is already in use" },
            { status: 400 }
          ));
          return;
        }

        const hashedPassword = await hash(password, 10);

        const user = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            provider: "local",
          },
        });

        resolve(NextResponse.json({ user }, { status: 201 }));
      } catch (error) {
        resolve(NextResponse.json({ error: "Internal Server Error" }, { status: 500 }));
      }
    });
  });
}