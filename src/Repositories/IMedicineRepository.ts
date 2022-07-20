import { IMedicine, ICreateMedicineDTO, IUpdateMedicineDTO } from "../useCases/Medicine/IMedicineDTO"
import { IMedicineRace } from "../useCases/MedicineRace/IMedicineRaceDTO"

export interface IMedicineRepository {
    save(resource: ICreateMedicineDTO): Promise<void>
    update(id: string, resource: IUpdateMedicineDTO): Promise<void>
    delete(id: string): Promise<void>
    show(): Promise<IMedicine[]>
    findById(id: string): Promise<IMedicine | null>
    findByAnimalId(id: string): Promise<IMedicineRace | null>
    createMedicineRace(animalId: string, medicineId: string): Promise<IMedicineRace>
}