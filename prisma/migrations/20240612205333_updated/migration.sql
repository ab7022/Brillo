/*
  Warnings:

  - You are about to drop the column `email` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `social_github` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `social_linkedin` on the `BasicInfo` table. All the data in the column will be lost.
  - You are about to drop the column `social_twitter` on the `BasicInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BasicInfo" DROP COLUMN "email",
DROP COLUMN "number",
DROP COLUMN "social_github",
DROP COLUMN "social_linkedin",
DROP COLUMN "social_twitter";
