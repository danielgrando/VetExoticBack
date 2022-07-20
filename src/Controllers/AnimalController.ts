import { Request, Response } from 'express'
import AnimalRepository from '../Repositories/Implementations/AnimalRepository';
import { errorInRouter, resourceCreatedSuccess, resourceDeletedSuccess, resourceUpdatedSuccess } from "../utils/utilsRequest";

class AnimalController {
    async create(req: Request, res: Response) {
        try {
            const animalRepository = new AnimalRepository()

            await animalRepository.save(req.body)

            resourceCreatedSuccess(res)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params

            const animalRepository = new AnimalRepository()

            await animalRepository.update(id, req.body)

            resourceUpdatedSuccess(res)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const animalRepository = new AnimalRepository()

            await animalRepository.delete(id)

            resourceDeletedSuccess(res)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }

    async index(req: Request, res: Response) {
        try {
            const animalRepository = new AnimalRepository()

            const response = await animalRepository.show()

            return res.json(response)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }


    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params

            const animalRepository = new AnimalRepository()

            const response = await animalRepository.findById(id)

            return res.json(response)
        } catch (error) {
            errorInRouter(req, res, error)
        }
    }
}


export default new AnimalController()