import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import GitHubProvider from "next-auth/providers/github";

const client = new PrismaClient();

export const NEXT_AUTH_CONFIG = {
  // adapter: PrismaAdapter(client),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials) {
        const user = { id: "42", email: "bayees1@gmail.com", password: "ssss" };
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        if (
          credentials?.email !== user.email ||
          credentials?.password !== user.password
        ) {
          return user;
        } else {
          return null;
        }

        // const user = await client.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // });

        // if (!user) {
        //   return null;
        // }

        // const passwordMatch =compare(credentials.password,user.password)

        // if (!passwordMatch) {
        //   return null;
        // }

        const token = sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });

        return { ...user, token };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      // authorization: {
      //   params: {
      //     prompt: 'consent',
      //     access_type: 'offline',
      //     response_type: 'code',
      //   },
      // },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { name, email, image } = user;

        const existingUser = await client.user.findUnique({
          where: { email: email },
        });

        if (existingUser) {
          console.log("user already exists in the db");
        } else {
          const newUser = await client.user.create({
            data: {
              name: name,
              email: email,
              profile_url: image,
              provider:account.provider
            },
          });
          return newUser;
        }
        
      }

      return true;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.uid = user.id;
        console.log(token);
        
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    // signup:"/auth/signup",
    signOut: "/auth/signout",
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: null, // Disable this route
  },
};
