import mongoose from "mongoose";

const restauranteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  tipoCozinha: { type: String, required: true },
  telefone: { type: String, required: true }
}, { versionKey: false} );

const Restaurante = mongoose.model("Restaurante", restauranteSchema);

export default Restaurante;
