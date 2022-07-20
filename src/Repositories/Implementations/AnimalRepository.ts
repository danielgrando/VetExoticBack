import { prisma } from "../../database/prismaClient";
import { ICreateAnimalDTO, IUpdateAnimalDTO, IAnimal } from "../../useCases/Animals/IAnimalsDTO";
import { IAnimalRepository } from "../IAnimalRepository";

export default class AnimalRepository implements IAnimalRepository {
    async save({ name, icon }: ICreateAnimalDTO): Promise<void> {
        await prisma.animalRace.create({
            data: { name, icon }
        })
    }

    async update(id: string, { name, icon }: IUpdateAnimalDTO): Promise<void> {
        await prisma.animalRace.update({
            where: {
                id
            }, data: {
                name,
                icon,
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.animalRace.delete({
            where: { id }
        })
    }

    async show(): Promise<IAnimal[]> {
        return await prisma.animalRace.findMany()
    }

    async findById(id: string): Promise<IAnimal | null> {
        return await prisma.animalRace.findFirst({
            where: {
                id
            },

        })
    }

    async findAnimalDosageByAnimalIdAndMedicineId(animalId: string, medicineId: string): Promise<any> {
        return await prisma.animalDosage.findMany({
            where: {
                animalId,
                medicineId
            }
        })
    }
}


// include: {
//     AnimalMedicine: {
//         include: {
//             medicine: {
//                 select: {
//                     id: true,
//                     name: true,
//                     classification: true,
//                     description: true,
//                     pharmacology: true,
//                     bibliographic_references: true
//                 }
//             }
//         }
//     }
// }