-- CreateTable
CREATE TABLE "animals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicines" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pharmacology" TEXT NOT NULL,
    "bibliographic_references" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animals_medicines" (
    "id" TEXT NOT NULL,
    "id_animal" TEXT NOT NULL,
    "id_medicine" TEXT NOT NULL,
    "application_routes" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "animals_medicines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animals_medicines" ADD CONSTRAINT "animals_medicines_id_animal_fkey" FOREIGN KEY ("id_animal") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals_medicines" ADD CONSTRAINT "animals_medicines_id_medicine_fkey" FOREIGN KEY ("id_medicine") REFERENCES "medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
