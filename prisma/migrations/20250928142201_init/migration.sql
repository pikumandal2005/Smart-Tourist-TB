-- CreateTable
CREATE TABLE "public"."Tourist" (
    "id" SERIAL NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "passwordHash" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "aadhaarNumber" TEXT,
    "emergencyDetails" JSONB,
    "companionsCount" INTEGER NOT NULL DEFAULT 0,
    "gender" TEXT,
    "language" TEXT DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tourist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TourPlan" (
    "id" SERIAL NOT NULL,
    "touristId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "locationName" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "geofenceRadiusMeters" INTEGER NOT NULL DEFAULT 1000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TourPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LocationPing" (
    "id" SERIAL NOT NULL,
    "touristId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "speedKmh" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LocationPing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Alert" (
    "id" SERIAL NOT NULL,
    "touristId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Expenditure" (
    "id" SERIAL NOT NULL,
    "touristId" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Expenditure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SafetyScore" (
    "id" SERIAL NOT NULL,
    "touristId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SafetyScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LedgerBlock" (
    "id" SERIAL NOT NULL,
    "index" INTEGER NOT NULL,
    "prevHash" TEXT,
    "dataJson" TEXT NOT NULL,
    "dataHash" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LedgerBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tourist_uniqueId_key" ON "public"."Tourist"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Tourist_email_key" ON "public"."Tourist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "public"."Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LedgerBlock_index_key" ON "public"."LedgerBlock"("index");

-- AddForeignKey
ALTER TABLE "public"."TourPlan" ADD CONSTRAINT "TourPlan_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "public"."Tourist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LocationPing" ADD CONSTRAINT "LocationPing_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "public"."Tourist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Alert" ADD CONSTRAINT "Alert_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "public"."Tourist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Expenditure" ADD CONSTRAINT "Expenditure_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "public"."Tourist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SafetyScore" ADD CONSTRAINT "SafetyScore_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "public"."Tourist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
