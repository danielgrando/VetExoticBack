import { Request, Response } from 'express'
import AnimalRepository from '../Repositories/Implementations/AnimalRepository';
import MedicineRepository from '../Repositories/Implementations/MedicineRepository';
import { IMedicineRace } from '../useCases/MedicineRace/IMedicineRaceDTO';
import { errorInRouter, resourceCreatedSuccess, resourceDeletedSuccess, resourceUpdatedSuccess } from "../utils/utilsRequest";

class MedicineController {
    async create(req: Request, res: Response) {
        try {
            const medicineRepository = new MedicineRepository()

            await medicineRepository.save(req.body)

            resourceCreatedSuccess(res)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params

            const medicineRepository = new MedicineRepository()

            await medicineRepository.update(id, req.body)

            resourceUpdatedSuccess(res)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const medicineRepository = new MedicineRepository()

            await medicineRepository.delete(id)

            resourceDeletedSuccess(res)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

    async index(req: Request, res: Response) {
        try {
            const medicineRepository = new MedicineRepository()

            const response = await medicineRepository.show()

            return res.json(response)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }


    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params

            const medicineRepository = new MedicineRepository()

            const response = await medicineRepository.findById(id)

            return res.json(response)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

    async findByAnimalId(req: Request, res: Response) {
        try {
            const { animalId } = req.params

            const medicineRepository = new MedicineRepository()

            const response = await medicineRepository.findByAnimalId(animalId)

            return res.json(response)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }


    async createMedicineRace(req: Request, res: Response): Promise<any> {
        try {
            const { medicineId, animalId } = req.body

            const medicineRepository = new MedicineRepository()

            const response = await medicineRepository.createMedicineRace(medicineId, animalId)

            return res.json(response)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

}


export default new MedicineController()