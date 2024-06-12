/*
  Warnings:

  - You are about to drop the column `skill_familiar_softwares` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `skill_interest` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `skill_language` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `skill_name` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `skill_programming_language` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `skill_soft_skills` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `skill_technical_skills` on the `Skill` table. All the data in the column will be lost.
  - Added the required column `interests_others_skills` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_soft_skills` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programming_technical_skills` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `software_proficiency` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "skill_familiar_softwares",
DROP COLUMN "skill_interest",
DROP COLUMN "skill_language",
DROP COLUMN "skill_name",
DROP COLUMN "skill_programming_language",
DROP COLUMN "skill_soft_skills",
DROP COLUMN "skill_technical_skills",
ADD COLUMN     "interests_others_skills" TEXT NOT NULL,
ADD COLUMN     "language_soft_skills" TEXT NOT NULL,
ADD COLUMN     "programming_technical_skills" TEXT NOT NULL,
ADD COLUMN     "software_proficiency" TEXT NOT NULL;
