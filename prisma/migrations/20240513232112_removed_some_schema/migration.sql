/*
  Warnings:

  - You are about to drop the column `title` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `Education_description` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `Education_end_date` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `Education_name` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `Education_start_date` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `project_name` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `WorkExperience` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `WorkExperience` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `WorkExperience` table. All the data in the column will be lost.
  - You are about to drop the `Certification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Interest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Intro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `designation` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_intro` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_github` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_instagram` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_linkedin` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_mail` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_twitter` to the `ContactInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Education_duration` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Education_institute` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Education_title` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_deployed_url` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_github_url` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_techstack` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_title` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_description` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Certification" DROP CONSTRAINT "Certification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Interest" DROP CONSTRAINT "Interest_userId_fkey";

-- DropForeignKey
ALTER TABLE "Intro" DROP CONSTRAINT "Intro_userId_fkey";

-- DropForeignKey
ALTER TABLE "Social" DROP CONSTRAINT "Social_userId_fkey";

-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "ContactInfo" ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "short_intro" TEXT NOT NULL,
ADD COLUMN     "social_github" TEXT NOT NULL,
ADD COLUMN     "social_instagram" TEXT NOT NULL,
ADD COLUMN     "social_linkedin" TEXT NOT NULL,
ADD COLUMN     "social_mail" TEXT NOT NULL,
ADD COLUMN     "social_twitter" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "Education_description",
DROP COLUMN "Education_end_date",
DROP COLUMN "Education_name",
DROP COLUMN "Education_start_date",
ADD COLUMN     "Education_duration" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Education_institute" TEXT NOT NULL,
ADD COLUMN     "Education_title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "project_name",
DROP COLUMN "project_url",
ADD COLUMN     "project_deployed_url" TEXT NOT NULL,
ADD COLUMN     "project_github_url" TEXT NOT NULL,
ADD COLUMN     "project_techstack" TEXT NOT NULL,
ADD COLUMN     "project_title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WorkExperience" DROP COLUMN "end_date",
DROP COLUMN "role",
DROP COLUMN "start_date",
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "duration" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "work_description" TEXT NOT NULL;

-- DropTable
DROP TABLE "Certification";

-- DropTable
DROP TABLE "Interest";

-- DropTable
DROP TABLE "Intro";

-- DropTable
DROP TABLE "Social";
