/*
  Warnings:

  - You are about to drop the column `education_college_name` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `education_duration` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `education_location` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `education_title` on the `Education` table. All the data in the column will be lost.
  - Added the required column `resume` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CGPA` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `college` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degree` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentage` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BasicInfo" ADD COLUMN     "resume" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "education_college_name",
DROP COLUMN "education_duration",
DROP COLUMN "education_location",
DROP COLUMN "education_title",
ADD COLUMN     "CGPA" TEXT NOT NULL,
ADD COLUMN     "college" TEXT NOT NULL,
ADD COLUMN     "degree" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "percentage" TEXT NOT NULL;
