import { IAnimal, IUpdateAnimalDTO, ICreateAnimalDTO } from "../useCases/Animals/IAnimalsDTO"

export interface IAnimalRepository {
    save(resource: ICreateAnimalDTO): Promise<void>
    update(id: string, resource: IUpdateAnimalDTO): Promise<void>
    delete(id: string): Promise<void>
    show(): Promise<IAnimal[]>
    findById(id: string): Promise<IAnimal | null>
    findAnimalDosageByAnimalIdAndMedicineId(animalId: string, medicineId: string): Promise<IAnimal | null>
}