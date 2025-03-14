// API significa Aplication Programming Interface
//POST(criar), GET(ler), PUT(atualizar), DELETE(deletar)
//CRUD = Create, Read, Update, Delete
//endpoint = rota que pode ser acessada em uma API

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const app = express();
const PORT = 3012;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints './artists' e './songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});
app.listen(PORT, () => {
  console.log(`servidor está escutando ${PORT}`);
});
