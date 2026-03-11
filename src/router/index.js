import express from "express";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "API Restaurante e Pratos" });
  });

  app.use(express.json());
};
