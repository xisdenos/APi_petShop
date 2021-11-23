import express from 'express'
import animalController from '../controllers/animal.controller.js';

const router = express.Router();

router.post("/", animalController.createAnimal);

router.put("/", animalController.updateAnimal);

router.delete('/:id', animalController.deleteAnimal);

router.get("/", animalController.consultasAnimal);

router.get("/:id", animalController.consultaAnimal);

export default router;