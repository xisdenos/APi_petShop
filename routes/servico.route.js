import express from 'express';
import servicoController from '../controllers/servico.controller.js';

const router = express.Router();

router.post("/", servicoController.createService);

router.get("/", servicoController.consultasServico);

router.get("/:id", servicoController.consultaServico);

export default router;