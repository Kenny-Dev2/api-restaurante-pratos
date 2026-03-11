import { Router } from "express";
import RestauranteController from "../controller/restaurante.controller.js";

const router = Router();

router
  .get("/restaurantes", RestauranteController.listarRestaurantes)
  .get("/restaurantes/:id", RestauranteController.obterRestaurantePorId)
  .post("/restaurantes", RestauranteController.criarRestaurante)
  .put("/restaurantes/:id", RestauranteController.atualizarRestaurante)
  .delete("/restaurantes/:id", RestauranteController.excluirRestaurante);

export default router;
