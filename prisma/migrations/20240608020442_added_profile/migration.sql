/*
  Warnings:

  - Added the required column `info_profile` to the `BasicInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BasicInfo" ADD COLUMN     "info_profile" TEXT NOT NULL;
