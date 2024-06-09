// "use client"
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth, { NextAuthOptions } from "next-auth";

const client = new PrismaClient();

export const NEXT_AUTH_CONFIG: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "42", email: "bayees1@gmail.com", password: "ssss" };

        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (
        account &&
        (account.provider === "google" || account.provider === "github")
      ) {
        const { email } = user;

        const existingUser = await client.user.findUnique({
          where: { email: email ?? undefined },
        });

        if (existingUser) {
        } else {
          await client.user.create({
            data: {
              name: user.name ?? "",
              email: email ?? "",
              profile_url: user.image,
              provider: account?.provider ?? "",
            },
          });
        }
      }
      return true; // Ensure boolean return type
    },
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    // async session({ session, token }) {
    //   if (token) {
    //     if (session.user) {
    //       session.user.id = token.uid as String
    //     }
    //   }
    //   return session;
    // },
    async session({ session, token }) {
      return { ...session, user: { ...session.user, id: token.uid, } };
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};

const handler = NextAuth(NEXT_AUTH_CONFIG);

export { handler as GET, handler as POST };
