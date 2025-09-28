-- CreateTable
CREATE TABLE "Tourist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TourPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "touristId" INTEGER NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "locationName" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "geofenceRadiusMeters" INTEGER NOT NULL DEFAULT 1000,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TourPlan_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "Tourist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LocationPing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "touristId" INTEGER NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "speedKmh" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LocationPing_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "Tourist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "touristId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Alert_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "Tourist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Expenditure" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "touristId" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Expenditure_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "Tourist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SafetyScore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "touristId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "reason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SafetyScore_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "Tourist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LedgerBlock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "index" INTEGER NOT NULL,
    "prevHash" TEXT,
    "dataJson" TEXT NOT NULL,
    "dataHash" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Tourist_uniqueId_key" ON "Tourist"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Tourist_email_key" ON "Tourist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LedgerBlock_index_key" ON "LedgerBlock"("index");
