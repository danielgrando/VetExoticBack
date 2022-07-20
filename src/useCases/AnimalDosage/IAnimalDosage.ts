interface IAnimalDosage {
    id: string
    medicineId: string
    medicine: string
    animalId: string
    animal: string
    name: string
    application_routes: string
    frequency: string
    dosage: string
    observations: string
    created_at: Date
    updated_at: Date
}

interface ICreateAnimalDosage {
    medicineId: string
    medicine: string
    animalId: string
    animal: string
    name: string
    application_routes: string
    frequency: string
    dosage: string
    observations: string
}

interface IUpdateAnimalDosage {
    medicineId: string
    medicine: string
    animalId: string
    animal: string
    name: string
    application_routes: string
    frequency: string
    dosage: string
    observations: string
}

export { IAnimalDosage, ICreateAnimalDosage, IUpdateAnimalDosage }