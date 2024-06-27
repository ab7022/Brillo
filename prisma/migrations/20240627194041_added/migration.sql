-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isdetailsubmitted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "visitor" INTEGER NOT NULL DEFAULT 0;
