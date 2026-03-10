import Prato from "../model/prato.model.js";

class PratoController {
  async listarPratos(req, res) {
    try {
      const pratos = await Prato.find();
      res.status(200).json(pratos);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }

  async obterPratoPorId(req, res) {
    try {
      const { id } = req.params;
      const prato = await Prato.findById(id);
      res.status(200).json(prato);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }

  async criarPrato(req, res) {
    try {
      const { nome, descricao, preco, categoria, restaurante } = req.body;
      const novoPrato = new Prato({
        nome,
        descricao,
        preco,
        categoria,
        restaurante,
      });
      const pratoSalvo = await novoPrato.save();
      res.status(201).json(pratoSalvo);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }

  async atualizarPrato(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, preco, categoria, restaurante } = req.body;
      const pratoAtualizado = await Prato.findByIdAndUpdate(
        id,
        { nome, descricao, preco, categoria, restaurante },
        { new: true },
      );
      res.status(200).json(pratoAtualizado);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }

  async excluirPrato(req, res) {
    try {
      const { id } = req.params;
      await Prato.findByIdAndDelete(id);
      res.status(204).send("Prato excluído com sucesso");
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
}
