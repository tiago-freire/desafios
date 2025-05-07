/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Movie` table. All the data in the column will be lost.
  - You are about to alter the column `budget` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - The `genre` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `originalTitle` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `budget` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `Movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "createdAt",
ADD COLUMN     "country" TEXT,
ADD COLUMN     "productionCompany" TEXT,
ADD COLUMN     "trailerUrl" TEXT,
ALTER COLUMN "originalTitle" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "duration" SET DATA TYPE TEXT,
ALTER COLUMN "budget" SET NOT NULL,
ALTER COLUMN "budget" SET DATA TYPE INTEGER,
ALTER COLUMN "imageUrl" SET NOT NULL,
DROP COLUMN "genre",
ADD COLUMN     "genre" TEXT[];
