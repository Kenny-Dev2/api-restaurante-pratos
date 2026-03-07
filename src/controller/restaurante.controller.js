import Restaurante from "../model/restaurante.model.js";

class RestauranteController {
  async listaRestaurantes(req, res) {
    try {
      const restaurantes = await Restaurante.find();
      res.status(200).json(restaurantes);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
}
