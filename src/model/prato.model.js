import mongoose from "mongoose";

const pratoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  preco: { type: Number, required: true },
  categoria: { type: String },
  restaurante: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurante", required: true }, 
}, { versionKey: false} );

const Prato = mongoose.model("Prato", pratoSchema);

export default Prato;
