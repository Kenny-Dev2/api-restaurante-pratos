import Restaurante from "../model/restaurante.model.js";

class RestauranteController {
  async listarRestaurantes(req, res) {
    try {
      const restaurantes = await Restaurante.find();
      res.status(200).json(restaurantes);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }

  async obterRestaurantePorId(req, res) {
    try {
      const { id } = req. params;
      const restaurante = await Restaurante.findById(id);
      res.status(200).json(restaurante);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }

  async criarRestaurante(req, res) {
    try {
      const { nome, cidade, estado, tipoCozinha, telefone } = req.body;
      const novoRestaurante = new Restaurante({ nome, cidade, estado, tipoCozinha, telefone });
      const restauranteSalvo = await novoRestaurante.save();
      res.status(201).json(restauranteSalvo);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
}
