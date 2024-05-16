/*
  Warnings:

  - You are about to drop the column `achievement_details` on the `Achievement` table. All the data in the column will be lost.
  - Added the required column `achievement_1` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement_2` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement_3` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `achievement_4` to the `Achievement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "achievement_details",
ADD COLUMN     "achievement_1" TEXT NOT NULL,
ADD COLUMN     "achievement_2" TEXT NOT NULL,
ADD COLUMN     "achievement_3" TEXT NOT NULL,
ADD COLUMN     "achievement_4" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "Education_duration" SET DATA TYPE TEXT;
