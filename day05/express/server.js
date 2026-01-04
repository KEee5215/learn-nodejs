import express from "express";
const app = express();
const port = 3000;

const greet = express.Router();

greet.get("/:language", (req, res) => {
  console.dir(req.params.language);
  if (req.params.language === "english") return res.send("Hello!");
  if (req.params.language === "spanish") return res.send("Hola!");
  if (req.params.language === "french") return res.send("Bonjour!");
  if (req.params.language === "japanese") return res.send("Konichiwa!");
  if (req.params.language === "chinese") return res.send("Nǐ hǎo!");
  res.send("Language not supported.");
});

app.use("/greet", greet);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
