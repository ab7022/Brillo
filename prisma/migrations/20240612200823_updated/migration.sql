/*
  Warnings:

  - You are about to drop the column `achievement_1` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `achievement_2` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `achievement_3` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `achievement_4` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `info_city` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_country` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_designation` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_email` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_first_name` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_intro` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_last_name` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_number` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_profile` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_social_github` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_social_linkedin` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `info_social_twitter` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `work_description_1` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `work_description_2` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `project_deployed_url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_github_url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_image` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_techstack` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_title` on the `Project` table. All the data in the column will be lost.
  - Added the required column `achievement1` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement2` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement3` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement4` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement5` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement6` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intro` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_github` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_linkedin` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_twitter` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description1` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description2` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description3` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deployed_url` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `github_url` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `techstack` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_administrative_skills` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "achievement_1",
DROP COLUMN "achievement_2",
DROP COLUMN "achievement_3",
DROP COLUMN "achievement_4",
ADD COLUMN     "achievement1" TEXT NOT NULL,
ADD COLUMN     "achievement2" TEXT NOT NULL,
ADD COLUMN     "achievement3" TEXT NOT NULL,
ADD COLUMN     "achievement4" TEXT NOT NULL,
ADD COLUMN     "achievement5" TEXT NOT NULL,
ADD COLUMN     "achievement6" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BasicInfo" DROP COLUMN "info_city",
DROP COLUMN "info_country",
DROP COLUMN "info_designation",
DROP COLUMN "info_email",
DROP COLUMN "info_first_name",
DROP COLUMN "info_intro",
DROP COLUMN "info_last_name",
DROP COLUMN "info_number",
DROP COLUMN "info_profile",
DROP COLUMN "info_social_github",
DROP COLUMN "info_social_linkedin",
DROP COLUMN "info_social_twitter",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "intro" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "profile" TEXT NOT NULL,
ADD COLUMN     "social_github" TEXT NOT NULL,
ADD COLUMN     "social_linkedin" TEXT NOT NULL,
ADD COLUMN     "social_twitter" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "work_description_1",
DROP COLUMN "work_description_2",
ADD COLUMN     "description1" TEXT NOT NULL,
ADD COLUMN     "description2" TEXT NOT NULL,
ADD COLUMN     "description3" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "project_deployed_url",
DROP COLUMN "project_description",
DROP COLUMN "project_github_url",
DROP COLUMN "project_image",
DROP COLUMN "project_techstack",
DROP COLUMN "project_title",
ADD COLUMN     "deployed_url" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "github_url" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "techstack" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "business_administrative_skills" TEXT NOT NULL;
