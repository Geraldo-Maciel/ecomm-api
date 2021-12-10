const mongoose = require ("mongoose"),
      Schema = mongoose.Schema;

const RegistroPedidoSchema = Schema ({
    pedido: {type: Schema.Types.ObjectId, ref: "Pedido", required: true},
    tipo: {type: String, required: true},
    situacao: {type: String, required: true},
    dados: {type: Date, default: Date.now},
    payload: {  type: Object }
}, {timestamps: true});

module.export = mongoose.model ("RegistroPedido", RegistroPedidoSchema);