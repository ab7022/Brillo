-- CreateTable
CREATE TABLE "SocialProfiles" (
    "id" SERIAL NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SocialProfiles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SocialProfiles" ADD CONSTRAINT "SocialProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
