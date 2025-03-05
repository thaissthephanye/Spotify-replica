//JS assincrono
//await async
//fullfiller

import { MongoClient } from "mongodb";
const URI =
  "mongodb+srv://thaissthe:thais3011@cluster0.c9v8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
const db = client.db("spotifyApp");
const songColection = await db.collection("songs").find({}).toArray();

console.log(songColection);
