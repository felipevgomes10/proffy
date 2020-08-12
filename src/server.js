//Servidor
const express = require("express");
const server = express();

const {
  pageLading,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require("./pages");

//configurar nunjucks (template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true, //desativa o cache para sempre vermos o arquivo mais recente.
});

//Configuração e inicio do servidor
server
  //receber os dados do req.body
  .use(express.urlencoded({ extended: true })) //habilitar o express para usar o req.body
  //configurar arquivos estáticos(css, imgs, scripts)
  .use(express.static("public"))
  //rotas do servidor
  .get("/", pageLading)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  //porta
  .listen(5500);
