const express = require("express");
const app = express();
const rotasProdutos = require("./routes/produtos");

/*
  Configurações do servidor
*/
let port = 3000;

app.use('/produtos', rotasProdutos);

app.listen(port,()=>console.log(`Servidor inicializado na porta ${port}.`));