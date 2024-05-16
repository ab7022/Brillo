/*
  Warnings:

  - You are about to drop the column `Education_college_name` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `Education_duration` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `Education_location` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `Education_title` on the `Education` table. All the data in the column will be lost.
  - Added the required column `education_college_name` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_duration` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_location` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_title` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Education" DROP COLUMN "Education_college_name",
DROP COLUMN "Education_duration",
DROP COLUMN "Education_location",
DROP COLUMN "Education_title",
ADD COLUMN     "education_college_name" TEXT NOT NULL,
ADD COLUMN     "education_duration" TEXT NOT NULL,
ADD COLUMN     "education_location" TEXT NOT NULL,
ADD COLUMN     "education_title" TEXT NOT NULL;
