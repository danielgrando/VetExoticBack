/*
  Warnings:

  - You are about to drop the `animals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `animals_medicines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "animals_medicines" DROP CONSTRAINT "animals_medicines_id_animal_fkey";

-- DropForeignKey
ALTER TABLE "animals_medicines" DROP CONSTRAINT "animals_medicines_id_medicine_fkey";

-- DropTable
DROP TABLE "animals";

-- DropTable
DROP TABLE "animals_medicines";

-- CreateTable
CREATE TABLE "animal_race" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "animal_race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicine_race" (
    "id" TEXT NOT NULL,
    "medicineId" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicine_race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animal_dosage" (
    "id" TEXT NOT NULL,
    "medicineId" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "application_routes" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "animal_dosage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "medicine_race" ADD CONSTRAINT "medicine_race_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animal_race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicine_race" ADD CONSTRAINT "medicine_race_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_dosage" ADD CONSTRAINT "animal_dosage_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animal_race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_dosage" ADD CONSTRAINT "animal_dosage_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
