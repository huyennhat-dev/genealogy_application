/*
  Warnings:

  - You are about to drop the column `patriarchId` on the `Tribe` table. All the data in the column will be lost.
  - You are about to drop the `Patriarch` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Tribe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- DropForeignKey
ALTER TABLE "Patriarch" DROP CONSTRAINT "Patriarch_tribeId_fkey";

-- AlterTable
ALTER TABLE "Tribe" DROP COLUMN "patriarchId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Patriarch";

-- CreateTable
CREATE TABLE "Info" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "birthDate" TEXT,
    "deathDate" TEXT,
    "imageUrl" TEXT,
    "biography" TEXT,
    "sex" "Sex",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Info" ADD CONSTRAINT "Info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
