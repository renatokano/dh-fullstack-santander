const express = require("express");
const router = express.Router();
const produtosController = require("../controllers/ProdutosController");

// listar todos os produtos
router.get("/", produtosController.index);

// exibir informações sobre produto específico a partir de seu `id`
// uso de rotas parametrizadas
router.get("/detalhe/:id", produtosController.show);

module.exports = router;