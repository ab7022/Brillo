/*
  Warnings:

  - You are about to drop the column `subscriptionPlanId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `validity` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `SubscriptionPlan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_subscriptionPlanId_fkey";

-- AlterTable
ALTER TABLE "BasicInfo" ALTER COLUMN "profile" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "subscriptionPlanId",
DROP COLUMN "validity",
ADD COLUMN     "validTill" TIMESTAMP(3);

-- DropTable
DROP TABLE "SubscriptionPlan";

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "lemonOrderId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_lemonOrderId_key" ON "Order"("lemonOrderId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
