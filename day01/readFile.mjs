import { readFile } from "node:fs/promises";

const data = await readFile("./example.json", "utf-8");

console.log(data.toString());
