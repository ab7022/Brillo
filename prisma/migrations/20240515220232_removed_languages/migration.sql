/*
  Warnings:

  - You are about to drop the column `description` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `Education_institute` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `project_tags` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `ContactInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkExperience` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `achievement_details` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Education_college_name` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_familiar_softwares` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_language` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_programming_language` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_soft_skills` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill_technical_skills` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContactInfo" DROP CONSTRAINT "ContactInfo_userId_fkey";

-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_userId_fkey";

-- DropForeignKey
ALTER TABLE "WorkExperience" DROP CONSTRAINT "WorkExperience_userId_fkey";

-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "description",
ADD COLUMN     "achievement_details" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "Education_institute",
ADD COLUMN     "Education_college_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "project_tags";

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "skill_familiar_softwares" TEXT NOT NULL,
ADD COLUMN     "skill_language" TEXT NOT NULL,
ADD COLUMN     "skill_programming_language" TEXT NOT NULL,
ADD COLUMN     "skill_soft_skills" TEXT NOT NULL,
ADD COLUMN     "skill_technical_skills" TEXT NOT NULL;

-- DropTable
DROP TABLE "ContactInfo";

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "WorkExperience";

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "work_description_1" TEXT NOT NULL,
    "work_description_2" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasicInfo" (
    "id" SERIAL NOT NULL,
    "info_first_name" TEXT NOT NULL,
    "info_last_name" TEXT NOT NULL,
    "info_social_github" TEXT NOT NULL,
    "info_social_linkedin" TEXT NOT NULL,
    "info_designation" TEXT NOT NULL,
    "info_intro" TEXT NOT NULL,
    "info_email" TEXT NOT NULL,
    "info_number" TEXT NOT NULL,
    "info_city" TEXT NOT NULL,
    "info_country" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BasicInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasicInfo" ADD CONSTRAINT "BasicInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
