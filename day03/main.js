import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const readLine = createInterface({
  input: stdin,
  output: stdout,
});

const name = await readLine.question("what's your name? \n");
const age = await readLine.question("what's your age? \n");

const birthYear = new Date().getFullYear() - Number(age);

const answer = await readLine.question(
  `${name},you birth year is ${birthYear}, right?(y/n)\n`
);

if (answer[0].toUpperCase() !== "Y")
  console.log(`I know, you birth year is ${birthYear - 1}`);
else console.log("nice!");

readLine.close();
