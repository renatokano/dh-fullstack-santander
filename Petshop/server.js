const http = require("http");
const url = require("url");
const petshop = require("./petshop");

http.createServer((req,res)=>{

    let urlCompleta = url.parse(req.url,true);
    console.log(urlCompleta);

    if(urlCompleta.pathname == "/"){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("<h1>Você está na página inicial.</h1>");
    } 
    if (urlCompleta.pathname == "/home"){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write("<h1>Você está na home do sistema!</h1>");
    }
    if (urlCompleta.pathname == "/pet/adicionar"){
        if(urlCompleta.query.nome && petshop.adicionarPet(urlCompleta.query.nome)){
            res.writeHead(201, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("Pet adicionado com sucesso");
        }
        else {
            res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("Erro ao adicionar pet");
        }
    }
    res.end();
    //console.log("Estou em um servidor!");
}).listen(3000, 'localhost');