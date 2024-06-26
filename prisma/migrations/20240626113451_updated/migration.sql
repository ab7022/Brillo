/*
  Warnings:

  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserTemplate" DROP CONSTRAINT "UserTemplate_templateId_fkey";

-- DropTable
DROP TABLE "Template";
