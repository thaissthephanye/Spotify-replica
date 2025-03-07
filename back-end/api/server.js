// API significa Aplication Programming Interface
//POST(criar), GET(ler), PUT(atualizar), DELETE(deletar)
//CRUD = Create, Read, Update, Delete
//endpoint = rota que pode ser acessada em uma API

import express from "express";
import { db } from "./connect.js";

const app = express();
const PORT = 3012;

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints './artists' e './songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`servidor está escutando ${PORT}`);
});
