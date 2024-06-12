/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `SocialProfiles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SocialProfiles" ALTER COLUMN "phone" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "SocialProfiles_userId_key" ON "SocialProfiles"("userId");
