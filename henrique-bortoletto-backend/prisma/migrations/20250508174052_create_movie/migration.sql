-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('ACAO', 'AVENTURA', 'FICCAO_CIENTIFICA', 'COMEDIA', 'DRAMA', 'TERROR', 'ROMANCE', 'DOCUMENTARIO', 'ANIMACAO', 'FANTASIA');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('LANCADO', 'EM_PRODUCAO', 'CANCELADO', 'ANUNCIADO', 'POS_PRODUCAO');

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "release" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "language" TEXT NOT NULL,
    "budget" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "revenue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "profit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cover" TEXT NOT NULL,
    "thumb" TEXT NOT NULL,
    "embeed_yt" TEXT,
    "genres" "Genre"[],
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "movie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
