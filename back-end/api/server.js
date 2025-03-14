// API significa Aplication Programming Interface
//POST(criar), GET(ler), PUT(atualizar), DELETE(deletar)
//CRUD = Create, Read, Update, Delete
//endpoint = rota que pode ser acessada em uma API

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

app.use(express.static(join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});
app.listen(PORT, () => {
  console.log(`servidor está escutando ${PORT}`);
});
