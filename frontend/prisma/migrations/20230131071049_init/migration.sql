-- CreateTable
CREATE TABLE "url3pokes" (
    "first" TEXT NOT NULL,
    "second" TEXT NOT NULL,
    "third" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "url3pokes_pkey" PRIMARY KEY ("first","second","third")
);

-- CreateIndex
CREATE UNIQUE INDEX "url3pokes_url_key" ON "url3pokes"("url");
