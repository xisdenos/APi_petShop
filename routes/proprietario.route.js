import express from 'express'
import proprietarioController from '../controllers/proprietario.controller.js'

const router = express.Router();

router.post("/", proprietarioController.createProprietario);

router.put("/", proprietarioController.updateProprietario);

router.delete('/:id', proprietarioController.deleteProprietario);

router.get("/", proprietarioController.consultasProprietario);

router.get("/:id", proprietarioController.consultaProprietario);

export default router;