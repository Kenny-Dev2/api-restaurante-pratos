import express from "express";
import restauranteRoutes from "./restaurante.route.js";
import pratoRoutes from "./prato.route.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "API Restaurante e Pratos" });
  });

  app.use(express.json(), restauranteRoutes, pratoRoutes);
};

export default routes;

