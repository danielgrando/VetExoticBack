interface IMedicine {
    id: string
    name: string
    classification: string
    description: string
    pharmacology: string
    bibliographic_references: string
    created_at: Date
    updated_at: Date
}

interface ICreateMedicineDTO {
    name: string
    classification: string
    description: string
    pharmacology: string
    bibliographic_references: string
}

interface IUpdateMedicineDTO {
    name?: string
    classification?: string
    description?: string
    pharmacology?: string
    bibliographic_references?: string
}

export { IMedicine, ICreateMedicineDTO, IUpdateMedicineDTO }