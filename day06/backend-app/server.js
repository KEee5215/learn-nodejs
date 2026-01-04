import express from "express";
import cors from "cors";
import { readFile } from "fs/promises";
const app = express();
const port = 3000;

app.use(cors());

app.get("/todos", async (req, res) => {
  const data = await readFile("./data.json", "utf-8");
  const todos = JSON.parse(data);
  return res.status(200).json(todos); //Convert an object to a string and send it
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
