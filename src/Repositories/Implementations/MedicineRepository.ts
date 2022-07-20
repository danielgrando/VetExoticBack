import { prisma } from "../../database/prismaClient";
import { IMedicine, ICreateMedicineDTO, IUpdateMedicineDTO } from "../../useCases/Medicine/IMedicineDTO";
import { IMedicineRace } from "../../useCases/MedicineRace/IMedicineRaceDTO";
import { IMedicineRepository } from "../IMedicineRepository";


export default class MedicineRepository implements IMedicineRepository {
    async save({ name, description, classification, bibliographic_references, pharmacology }: ICreateMedicineDTO): Promise<void> {
        await prisma.medicine.create({
            data: { name, description, classification, bibliographic_references, pharmacology }
        })
    }

    async update(id: string, { name, description, classification, bibliographic_references, pharmacology }: IUpdateMedicineDTO): Promise<void> {
        await prisma.medicine.update({
            where: {
                id
            }, data: {
                name, description, classification, bibliographic_references, pharmacology
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.medicine.delete({
            where: { id }
        })
    }

    async show(): Promise<IMedicine[]> {
        return await prisma.medicine.findMany()
    }

    async findById(id: string): Promise<IMedicine | null> {
        return await prisma.medicine.findFirst({
            where: { id }
        })
    }

    async findByAnimalId(animalId: string): Promise<any> {
        return await prisma.medicineRace.findMany({ where: { animalId }, include: { medicine: true } })
    }

    async createMedicineRace(medicineId: string, animalId: string): Promise<IMedicineRace> {
        return await prisma.medicineRace.create({
            data: { animalId, medicineId }
        })
    }
}