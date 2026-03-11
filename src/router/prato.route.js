import { Router } from "express";
import PratoController from "../controller/prato.controller.js";

const router = Router();

router
  .get("/pratos", PratoController.listarPratos)
  .get("/pratos/:id", PratoController.obterPratoPorId)
  .post("/pratos", PratoController.criarPrato)
  .put("/pratos/:id", PratoController.atualizarPrato)
  .delete("/pratos/:id", PratoController.excluirPrato);

export default router;

