/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `info_social_twitter` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_interest` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BasicInfo" ADD COLUMN     "info_social_twitter" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "skill_interest" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
