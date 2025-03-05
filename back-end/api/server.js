// API significa Aplication Programming Interface
//POST(criar), GET(ler), PUT(atualizar), DELETE(deletar)
//CRUD = Create, Read, Update, Delete
//endpoint = rota que pode ser acessada em uma API

import express from "express";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";

const app = express();
const PORT = 3012;

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints './artists' e './songs'");
});

app.get("/artists", (request, response) => {
  response.send(artistArray);
});

app.get("/songs", (request, response) => {
  response.send(songsArray);
});

app.listen(PORT, () => {
  console.log(`servidor está escutando ${PORT}`);
});
