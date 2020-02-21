const express = require("express");
const router = express.Router();

// listar todos os produtos
router.get("/", (req,res) => {
  res.send("Deve listar todos os produtos!!!");
});

// exibir informações sobre produto específico a partir de seu `id`
// uso de rotas parametrizadas
router.get("/detalhe/:id",(req,res) => {
  let id = req.params.id;
  res.send(`Detalhes do produto ${id} deverá ser exibido.`);
});

module.exports = router;