/*
  Warnings:

  - You are about to drop the column `ageRating` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "ageRating";

-- DropEnum
DROP TYPE "AgeRating";
