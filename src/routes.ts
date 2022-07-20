import { Router } from 'express'
import AnimalController from './Controllers/AnimalController'
import MedicineController from './Controllers/MedicineController'


const router = Router()

const createRoute = (path: any): Router => {
    const newRouter = Router()
    router.use(path, newRouter)
    return newRouter
}

const animalsCategoryRouter = createRoute('/v1/animals')
animalsCategoryRouter.post('/', AnimalController.create)
animalsCategoryRouter.get('/', AnimalController.index)
animalsCategoryRouter.get('/:id', AnimalController.findById)
animalsCategoryRouter.put('/:id', AnimalController.update)
animalsCategoryRouter.delete('/:id', AnimalController.delete)


const medicinesRouter = createRoute('/v1/medicines')
medicinesRouter.post('/', MedicineController.create)
medicinesRouter.get('/', MedicineController.index)
medicinesRouter.get('/:id', MedicineController.findById)
medicinesRouter.put('/:id', MedicineController.update)
medicinesRouter.delete('/:id', MedicineController.delete)


const animalMedicineRouter = createRoute('/v1/medicines-animals')
animalMedicineRouter.get('/:animalId', MedicineController.findByAnimalId)
animalMedicineRouter.post('/', MedicineController.createMedicineRace)


const animalDosageRouter = createRoute('/v1/animal-dosage')
animalDosageRouter.get('/:animalId/:medicineId', AnimalController.findAnimalDosageByAnimalIdAndMedicineId)

export default router