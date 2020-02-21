const controller = {
  index: (req,res) => {
    res.send("Página deve listar todos os produtos.");
  },
  show: (req,res) => {
    id = req.params.id;
    res.send(`Página deve mostrar detalhes do produto: ${id}`)
  }
}

module.exports = controller;