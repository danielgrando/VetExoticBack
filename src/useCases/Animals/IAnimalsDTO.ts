interface IAnimal {
    id: string
    name: string
    icon: string
    created_at: Date
    updated_at: Date
}

interface ICreateAnimalDTO {
    name: string
    icon: string
}

interface IUpdateAnimalDTO {
    name?: string
    icon?: string
}



export { ICreateAnimalDTO, IUpdateAnimalDTO, IAnimal }