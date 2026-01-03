//node http esm server example
import { readFile } from "node:fs/promises";
import http from "node:http";

const jsonFile = await readFile("./data.json", "utf-8");
const htmlFile = await readFile("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/data.json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(jsonFile);
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlFile);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
