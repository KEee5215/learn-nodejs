//node http esm server example
import { readFile } from "node:fs/promises";
import http from "node:http";

const htmlFile = await readFile("./data.json", "utf-8");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(htmlFile);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
